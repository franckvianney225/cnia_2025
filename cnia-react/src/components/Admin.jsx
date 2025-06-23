import { useState, useEffect } from 'react'
import { FaUsers, FaFileAlt, FaChartBar, FaCog, FaSignOutAlt, FaFileExcel, FaFileCsv, FaFilePdf, FaUserPlus } from 'react-icons/fa'
import UserCreationForm from './UserCreationForm'
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

const exportToExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Inscriptions')
  XLSX.writeFile(workbook, 'inscriptions.xlsx')
}

const exportToCSV = (data) => {
  const csv = XLSX.utils.sheet_to_csv(XLSX.utils.json_to_sheet(data))
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'inscriptions.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const exportToPDF = (data) => {
  try {
    const doc = new jsPDF()
    
    doc.text('Liste des inscriptions CNIA 2025', 14, 16)
    
    doc.autoTable({
      head: [['Nom', 'Prénom', 'Email', 'Téléphone', 'Organisation', 'Profil']],
      body: data.map(item => [
        item.nom || '',
        item.prenom || '',
        item.email || '',
        item.telephone || '',
        item.organisation || '',
        item.profil || ''
      ]),
      startY: 20,
      margin: { top: 20 },
      styles: {
        overflow: 'linebreak',
        cellPadding: 2,
        fontSize: 8
      }
    })
    
    doc.save('inscriptions.pdf')
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
    alert('Une erreur est survenue lors de la génération du PDF')
  }
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [registrations, setRegistrations] = useState([])
  const [showUserForm, setShowUserForm] = useState(false)

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/register/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setRegistrations(registrations.filter(reg => reg.id !== id));
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/register', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        const data = await response.json()
        setRegistrations(data)
      } catch (error) {
        console.error('Erreur lors du chargement des inscriptions:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-orange-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Administration CNIA 2025</h1>
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
            className="flex items-center space-x-2 bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-md transition"
          >
            <FaSignOutAlt />
            <span>Déconnexion</span>
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center space-x-3 p-3 rounded-md ${activeTab === 'dashboard' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                >
                  <FaChartBar />
                  <span>Tableau de bord</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('registrations')}
                  className={`w-full flex items-center space-x-3 p-3 rounded-md ${activeTab === 'registrations' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                >
                  <FaUsers />
                  <span>Inscriptions</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('reports')}
                  className={`w-full flex items-center space-x-3 p-3 rounded-md ${activeTab === 'reports' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                >
                  <FaFileAlt />
                  <span>Rapports</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 p-3 rounded-md ${activeTab === 'settings' ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                >
                  <FaCog />
                  <span>Paramètres</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Tableau de bord</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h3 className="text-gray-600 mb-2">Total inscriptions</h3>
                  <p className="text-3xl font-bold text-orange-600">{registrations.length}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="text-gray-600 mb-2">Dernière inscription</h3>
                  <p className="text-xl font-bold text-blue-600">
                    {registrations.length > 0 
                      ? new Date(registrations[0].dateInscription).toLocaleDateString()
                      : 'Aucune'}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="text-gray-600 mb-2">Profil principal</h3>
                  <p className="text-xl font-bold text-green-600">
                    {registrations.length > 0 
                      ? registrations[0].profil 
                      : 'Aucun'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'registrations' && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Gestion des inscriptions</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => exportToExcel(registrations)}
                    className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    <FaFileExcel />
                    <span>Excel</span>
                  </button>
                  <button 
                    onClick={() => exportToCSV(registrations)}
                    className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                  >
                    <FaFileCsv />
                    <span>CSV</span>
                  </button>
                  <button 
                    onClick={() => exportToPDF(registrations)}
                    className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    <FaFilePdf />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom complet</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profil</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registrations.map((reg, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{reg.nom} {reg.prenom}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{reg.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{reg.telephone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{reg.organisation}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {reg.profil}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-orange-600 hover:text-orange-900 mr-3">Éditer</button>
                          <button 
                            className="text-red-600 hover:text-red-900"
                            onClick={() => {
                              if (window.confirm('Confirmez-vous la suppression de cette inscription ?')) {
                                handleDelete(reg.id)
                              }
                            }}
                          >Supprimer</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Rapports</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Rapport des inscriptions par jour</h3>
                  <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                    <p className="text-gray-400">Graphique des inscriptions</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Répartition par secteur</h3>
                  <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                    <p className="text-gray-400">Graphique des secteurs</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Paramètres</h2>
              <div className="space-y-6">
                <button 
                  onClick={() => setShowUserForm(!showUserForm)}
                  className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
                >
                  <FaUserPlus />
                  <span>{showUserForm ? 'Masquer' : 'Créer un utilisateur'}</span>
                </button>

                {showUserForm && (
                  <div className="bg-white p-4 rounded-lg shadow">
                    <UserCreationForm 
                      onCreateUser={async (userData) => {
                        const response = await fetch('http://localhost:5000/api/auth/register', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            ...userData,
                            role: 'admin'
                          })
                        })
                        
                        if (!response.ok) {
                          const error = await response.json()
                          throw new Error(error.message || 'Erreur lors de la création')
                        }
                      }}
                    />
                  </div>
                )}

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'événement</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      defaultValue="Conférence Nationale sur l'Intelligence Artificielle 2025"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de l'événement</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      defaultValue="2025-05-19"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lieu</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      defaultValue="Espace Latrille, Abidjan"
                    />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                      Enregistrer les modifications
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

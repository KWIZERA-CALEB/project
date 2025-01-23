import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'



export default function AdminDashboard () {
    return (
        <div className='w-full h-[100vh] flex flex-row'>
            <Sidebar />
            <div className='flex-1 ml-[270px]'>
                <AdminNavbar />
            </div>
        </div>
    )
}
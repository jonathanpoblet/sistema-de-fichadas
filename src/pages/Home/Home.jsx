import Table from '../../components/Table/Table';
import './home.css';

export default function Home() {
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: 'Nombre' },
    { key: 'lastname', name: 'Apellido' },
    { key: 'age', name: 'Edad' },
    { key: 'company', name: 'Empresa' },
    { key: 'profession', name: 'Profesión' },
  ];

  const data = [
    {
      id: 1,
      name: 'Jonathan',
      lastname: 'Poblet',
      age: 21,
      company: 'Grupo Taraborelli',
      profession: 'Desarrollador Web'
    },
    {
      id: 2,
      name: 'Dante',
      lastname: 'Poblet',
      age: 12,
      company: '-',
      profession: 'Estudiante'
    },
    {
      id: 3,
      name: 'Andrea',
      lastname: 'Carrizo',
      age: 45,
      company: 'Soprano Ice Platinum',
      profession: 'Cosmetologa'
    },
    {
      id: 4,
      name: 'Jonathan',
      lastname: 'Poblet',
      age: 21,
      company: 'Grupo Taraborelli',
      profession: 'Desarrollador Web'
    },
    {
      id: 5,
      name: 'Dante',
      lastname: 'Poblet',
      age: 12,
      company: '-',
      profession: 'Estudiante'
    },
    {
      id: 6,
      name: 'Andrea',
      lastname: 'Carrizo',
      age: 45,
      company: 'Soprano Ice Platinum',
      profession: 'Cosmetologa'
    },
    {
      id: 7,
      name: 'Jonathan',
      lastname: 'Poblet',
      age: 21,
      company: 'Grupo Taraborelli',
      profession: 'Desarrollador Web'
    },
    {
      id: 8,
      name: 'Dante',
      lastname: 'Poblet',
      age: 12,
      company: '-',
      profession: 'Estudiante'
    },
    {
      id: 9,
      name: 'Andrea',
      lastname: 'Carrizo',
      age: 45,
      company: 'Soprano Ice Platinum',
      profession: 'Cosmetologa'
    },
    {
      id: 10,
      name: 'Jonathan',
      lastname: 'Poblet',
      age: 21,
      company: 'Grupo Taraborelli',
      profession: 'Desarrollador Web'
    },
    {
      id: 11,
      name: 'Dante',
      lastname: 'Poblet',
      age: 12,
      company: '-',
      profession: 'Estudiante'
    },
    {
      id: 12,
      name: 'Andrea',
      lastname: 'Carrizo',
      age: 45,
      company: 'Soprano Ice Platinum',
      profession: 'Cosmetologa'
    },
    {
      id: 13,
      name: 'Jonathan',
      lastname: 'Poblet',
      age: 21,
      company: 'Grupo Taraborelli',
      profession: 'Desarrollador Web'
    },
    {
      id: 14,
      name: 'Dante',
      lastname: 'Poblet',
      age: 12,
      company: '-',
      profession: 'Estudiante'
    },
    {
      id: 15,
      name: 'Andrea',
      lastname: 'Carrizo',
      age: 45,
      company: 'Soprano Ice Platinum',
      profession: 'Cosmetologa'
    },
  ];

  return (
    <main className='home'>
      <Table columns={ columns } data={ data }/>
    </main>
  )
}

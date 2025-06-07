// // src/app/login/page.jsx
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

// import Login from '@/app/components/Logins/Login';


// export default function LoginPage({ searchParams }) {
//   const cookieStore = cookies();
//   const tipo = cookieStore.get('tipo')?.value;
//   const vagaId = searchParams?.vagaId;

//   if (tipo === 'empresa') {
//     redirect('/empresa/vagas');
//   }

//   if (tipo === 'aluno') {
//     if (vagaId) {
//       redirect(`/vaga/${vagaId}`);
//     } else {
//       redirect('/home');
//     }
//   }

//   return (
//     <>
//       {/* <EstrelasCaindo /> */}
//       <Login />
//     </>
//   );
// }

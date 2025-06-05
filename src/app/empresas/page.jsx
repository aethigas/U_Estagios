
import EstrelasCaindo from "@/app/components/EstrelasFundo/EstrelasCaindo";
import Header from "../components/Layout/Header/Header";
import EmpresaVagas from "../components/EmpresaVagas/EmpresaVagas";

export default function EmpresaPage() {
  return (
    <>
    <Header/>
      <EstrelasCaindo />
      <EmpresaVagas></EmpresaVagas>
    </>
  );
}

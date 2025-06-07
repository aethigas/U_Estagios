import AlunoVagas from "@/app/components/AlunoVagas/AlunoVagas";
import EstrelasCaindo from "@/app/components/EstrelasFundo/EstrelasCaindo";
import Header from "../components/Layout/Header/Header";

export default function AlunosPage() {
  return (
    <>
    <Header/>
      <EstrelasCaindo />
      <AlunoVagas />
    </>
  );
}

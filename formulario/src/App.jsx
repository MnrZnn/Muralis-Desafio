import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [curso, setCurso] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [opcoes, setOpcoes] = useState([]);

  const cidades = {
    SP: ["Mogi das Cruzes", "Suzano", "Poá", "Guararema"],
    RJ: ["Angra dos Reis", "Niterói", "Itaboraí"],
    MG: ["Belo Horizonte", "Monte Azul", "Muzambinho"],
  };

  const selecaoEstado = (e) => {
    const estado = e.target.value;
    setEstado(estado);
    setOpcoes(cidades[estado] || []);
    setCidade("");
  };

  return (
    <>
    <div className="container">
    <h2 className="h2">Cadastro de Ingressantes</h2>
    <form>
        <div className="form-group">
        <label className="label">
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label className="label">
            Curso:
            <select
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>
              </option>
              <option value="Matemática">Matemática</option>
              <option value="Letras">Letras</option>
              <option value="Geografia">Geografia</option>
            </select>
          </label>
        </div>

        <div className="form-group">
        <label className="label">
            Estado:
            <select value={estado} onChange={selecaoEstado} className="select">
              <option value="" disabled>
              </option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
            </select>
          </label>
        </div>

        <div className="form-group">
        <label className="label">
            Cidades:
            <select
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="select"
            >
              <option value="" disabled>
              </option>
              {opcoes.map((opcao, index) => (
                <option key={index} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <button type="button" className="button-voltar">
            Voltar
          </button>
          <button type="submit" className="button">
            Gravar
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;

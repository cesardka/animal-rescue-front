import react from "react";
import "./style.css";
import { animaisData } from "./animais.mock";

export function MeusAnimais() {
  return (
    <div className='container'>
      <div className='meus-animais'>
        <div className='title-pag'>Para adoção</div>
        {animaisData.map((data, key) => {
          return (
            <div key={key} className='animal'>
              <img src={data.imgUrl} />
              <h3 className='title'>{data.nameAnimal}</h3>
              <div className='infos'>
                <div className='info-esquerda'>
                  <div className='info'>Espécie: {data.specie}</div>
                  <div className='info'>
                    Foi adotado: {data.isAdopted ? "Sim" : "Não"}
                  </div>
                </div>
                <div className='info-direita'>
                  <div className='info'>Sexo: {data.gender}</div>
                  <div className='info'>Idade: {data.age}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className='title-pag'>Adotados por mim</div>
        <div className='adotados'>
          Você ainda não adotou nenhum animal pelo nosso site.
        </div>
      </div>
    </div>
  );
}

import React, { useState, useCallback, useEffect, Component } from 'react'
import './App.css';
import api from '../../api';

function Main(dadoRequerido) {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')

  const getCovidData = useCallback((country) => {
    api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  switch (dadoRequerido) {
    case "casos":
      return data.cases
      break;

    case "mortes":
      return data.deaths
      break;

    case "recuperados":
      return data.recovered
      break;

    case "criticos":
      return data.critical
      break;

    case "casosPorMilhão":
      return data.casesPerOneMillion
      break;

      case "totalTestes":
        return data.totalTests
        break;
  }
}


function App() {
  return (
    <div className="paginaInicial">
      <div className="folhaPadrao">
        <h1> Casos de Covid no Brasil:</h1>
        <p>Casos: {Main("casos")}</p>
        <p>Mortes: {Main("mortes")}</p>
        <p>Recuperados: {Main("recuperados")}</p>
        <p>Casos Críticos: {Main("criticos")}</p>
        <p>Casos por Milhão: {Main("casosPorMilhão")}</p>
        <p>Total de Testes:{Main("totalTestes")}</p>



      </div>
    </div>
  );
}

export default App;

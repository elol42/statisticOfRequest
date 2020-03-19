

const CompanyDataPieChart = ({ data }) => {  
    const Chart = amcharts.something('PieChart', { data })
    return (
      <Chart />
    )
  }
  const Company = () => {
    const [comapny, setCompany] = useState()
    useEffect(() => {
      fetch('http://localhost:8080/company')
        .then(res => res.json())
        .then((json) => setCompany(json))
    }, [])
    if (company) {
      return (
        <CompanyDataPieChart data={company.eventsSums} />
      )
    }
    return <Loading />
  }
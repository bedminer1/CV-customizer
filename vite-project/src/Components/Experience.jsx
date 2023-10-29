import React, { useState } from 'react'

export default function Experience(
  {
  companyStateFn,  
  workTitleStateFn,
  responsibilitiesStateFn, 
  startDateStateFn,
  endDateStateFn,
  status,
  submitSetter
}) {
  const [company, setCompany] = useState('')
  const [workTitle, setWorkTitle] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleCompanyChange = (e) => {
    setCompany(e.target.value)
  }
  const handleWorkTitleChange = (e) => {
    setWorkTitle(e.target.value)
  }
  const handleResponsibilitiesChange = (e) => {
    setResponsibilities(e.target.value)
  }
  const handleStartDateChange = (e) => {
    setCompany(e.target.value)
  }
  const handleEndDateChange = (e) => {
    setCompany(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    companyStateFn(company)
    workTitleStateFn(workTitle)
    responsibilitiesStateFn(responsibilities)
    startDateStateFn(startDate)
    if (endDate == ''){
      endDateStateFn('present')
    } else {
      endDateStateFn(endDate)
    }
    submitSetter
  }

  return (
    <form onSubmit={handleSubmit}>
    <legend>Experience</legend>
    {(status == 'pending' || status == 'edit') && <>
    <label>Company Name</label>
    <input type="text" key='company' value={company} required onChange={handleCompanyChange}/>
    <label>Position Title</label>
    <input type="text" key='workTitle' value={workTitle} required onChange={handleWorkTitleChange}/>
    <label>Responsibilities</label>
    <input type="text" key='responsibilities' value={responsibilities} required onChange={handleResponsibilitiesChange}/>
    <label>Start Date</label>
    <input type="date" key='start-date' value={startDate} required onChange={handleStartDateChange}/>
    <label>End Date</label>
    <input type="date" key='end-date' value={endDate} onChange={handleEndDateChange}/>
    <div>
      <button>Submit</button>
    </div>
    </>}
    {(status == 'submitted' && <div><button>Edit</button></div>)}
  </form>
  )
}

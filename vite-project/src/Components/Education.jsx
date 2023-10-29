import React, { useState }from 'react'

export default function Education({schoolStateFn, studyStateFn, startDateStateFn, endDateStateFn, status, submitSetter}) {
  const [school, setSchool] = useState('')
  const [study, setStudy] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSchoolChange = (e) => {
    setSchool(e.target.value)
  }
  const handleStudyChange = (e) => {
    setStudy(e.target.value)
  }
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    schoolStateFn(school)
    studyStateFn(study)
    startDateStateFn(startDate)
    if (endDate == ''){
      endDateStateFn('present')
    } else {
      endDateStateFn(endDate)
    }
    submitSetter()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <legend>Education Info</legend>
      {(status == 'pending' || status == 'edit') && <>
      <label>School</label>
      <input type="text" key='school' value={school} required onChange={handleSchoolChange}/>
      <label>Title of Study</label>
      <input type="text" key='study' value={study} required onChange={handleStudyChange}/>
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

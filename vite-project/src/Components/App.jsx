import React, { useState } from 'react'
import '../styles/styles.css'
import Header from './Header'
import Education from './Education'
import BasicInfo from './BasicInfo'
import Professional from './Professional'
import SaveCV from './SaveCV'
import RenderField from './RenderField'



function App() {
  const [basicForm, setBasicForm] = useState('')
  const [basicFormEdit, setBasicFormEdit] = useState(false)
  const [educationForm, setEducationForm] = useState([])
  const [educationFormEdit, setEducationFormEdit] = useState(false)
  const [educationEntry, setEducationEntry] = useState(null);
  const [professionalForm, setProfessionalForm] = useState([]);
  const [professionalFormEdit, setProfessionalFormEdit] = useState(false);
  const [professionalEntry, setProfessionalEntry] = useState(null);

  const editForm = (e) => {
    setBasicFormEdit(!basicFormEdit)
  }

  const editEducationForm = (id) => {
    setEducationFormEdit(!educationFormEdit)
    setEducationEntry(id)
  }

  const saveInputValue = (obj) =>{
    switch (obj.form) {
      case 'basicForm':
        setBasicForm(obj)
        setBasicFormEdit(false)
        break
      case 'educationForm':
        if (educationFormEdit) {
          setEducationForm(
            educationForm.map((element, index) => {
              if (index == educationEntry) {
                return obj;
              }
              return element;
            })
          );
          setEducationFormEdit(false);
          setEducationEntry(null);
        } else {
          setEducationForm(educationForm.concant(obj))
          setEducationFormEdit(false)
          setEducationEntry(null)
        }
        break
      case 'professionalForm':
        if (professionalFormEdit) {
          setProfessionalForm(
            professionalForm.map((element, index) => {
              if (index == professionalEntry) {
                return obj
              }
              return element 
            })
          )
          setProfessionalFormEdit(false)
          setProfessionalEntry(null)
        } else {
          setProfessionalForm(professionalForm.concat(obj))
          setProfessionalFormEdit(false)
        }
        break
    }
  }



  return (
   <div className='main-container'>
      <div className='main-header'>
        <Header/>
      </div>
      <div className='main-content'>
        <div className='form-fill'>
          <div className='save-cv'>
            <SaveCV/>
          </div>

          <div className='basic-form-fill'>
            {!basicFormEdit && (
              <BasicInfo 
                saveInputValue={saveInputValue}
                isEditing={basicFormEdit}
                infoToEdit={basicForm}
              />
            )}
            {basicFormEdit && (
              <BasicInfo 
                saveInputValue={saveInputValue}
                isEditing={basicFormEdit}
                infoToEdit={basicForm}
              />
            )}
            {basicForm != '' && (
            <div className='basic-form-show'>
              <div className='basic-form-general-info'>
                <RenderField props={basicForm} />
              </div>
              
              <button onClick={editForm} className='edit-form'>
                <span>
                  <svg 
                   xmlns="http://www.w3.org/2000/svg"
                   height="48"
                   viewBox="0 -960 960 960"
                   width="48"
                   className="svg-edit"
                 >
                   <path d="M480-120v-71l216-216 71 71-216 216h-71ZM120-330v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120-495v-60h470v60H120Zm0-165v-60h470v60H120Z" />
                 </svg>
                 <span></span>
                 Edit
               </span>
              </button>
            </div>
            )}


          </div>

          </div>

      </div>
   </div>
  )
}

export default App

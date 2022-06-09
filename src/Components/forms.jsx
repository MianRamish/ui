import React,{useState} from 'react';
import { Modal, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './studentregistration.css';

function Forms() {
    const data =[ {
        session: '',
        school: '',
        level: '',
        gender: '',
        class: '',
        section: '',
        fathername: '',
        fatherjob: '',
        fathercnic: '',
        fatherqualification: '',
        mothername: '',
        mothercnic: '',
        motherqualification: '',
        gaurdianname: '',
        gaurdianjob: '',
        gaurdiancnic: '',
        gaurdianqualification: '',
        gaurdiannumber: '',
        gaurdianaddress: '',
        registrationnumber: 'GRN-12345',
        rollno: '',
        firstname: '',
        lastname: '',
        dateofbirth: '',
        homeaddress: '',
        mobileno: '',
        bio: '',
        previousschool: '',
        religon: '',
        dateofaddmission: '',
        addmissionfee: '',
        registrationfee: '',
        monthlyfee: '',
        annualfee: ''
    }]
    // Student Modal Handler
    const [showStdnt , setShowStdnt] =useState(false);
    const handleStudent = () => setShowStdnt(true);
    const handleStudentClose = () => setShowStdnt(false);
    // Teacher Modal Handler
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleTeacher = () => setShow(true);
    //Register School
    const [showSchool, setSchool] = useState(false);
    const handleSchool = () => setSchool(true);
    const handleSchoolClose = () => setSchool(false);
    //Session Handler
    const [setSession, setShowSession] = useState(false);
    const handleSession = () => setShowSession(true);
    const handleSessionClose = () => setShowSession(false);
    //Level Handler
    const [setLevel, setShowLevel] = useState(false);
    const handleLevel = () => setShowLevel(true);
    const handleLevelClose = () => setShowLevel(false);
    //Gender Handler
    const [setGender, setShowGender] = useState(false);
    const handleGender = () => setShowGender(true);
    const handleGenderClose = () => setShowGender(false);
    //Class Handler
    const [setClass, setShowClass] = useState(false);
    const handleClass = () => setShowClass(true);
    const handleClassClose = () => setShowClass(false);
    //Section Handler
    const [setSection, setShowSection] = useState(false);
    const handleSection = () => setShowSection(true);
    const handleSectionClose = () => setShowSection(false);
    // Progress-bar handler
    const [count, setCount] = useState(1);
    // Form Handler
    const { register, handleSubmit,  } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleTeacher}>
        Register New Teacher
      </Button>

      <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Teacher Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
     <div className="progress" style={{width: '690px', height: '8px'}}>
         <div className="progress-bar" role="progressbar" style={{width: count === 1 ? '25%' : count === 2 ? '50%' : count === 3 ? '75%' :  count ? '100%' : '' }}></div>
     </div>
     <div className="Teacher-form container">
        {count === 1 ? (
          <div className="container">
          <div className='row'>
            <div className='col-6 '>
              <table>
              <h3>Teacher Information</h3>
                <tr>
                  <th>Select Title:</th>
                  <td>
                    <select>
                      <option value='Mr.'>Mr.</option>
                      <option value='Mrs.'>Mrs.</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>First Name :</th>
                  <td><input type='text' /></td>
                </tr>
                <tr>
                  <th>Last Name :</th>
                  <td><input type='text' /></td>
                </tr>
                <tr>
                  <th>CNIC :</th>
                  <td><input type='tel' /></td>
                </tr>
                <tr>
                  <th>S/O-D/O :</th>
                  <td><input type='text' /></td>
                </tr>
                <tr>
                  <th>Education :</th>
                  <td><input type='text' /></td>
                </tr>
                <tr>
                  <th>Contact Number</th>
                  <td><input type='tel' /></td>
                </tr>
                <tr>
                  <th>UserName :</th>
                  <td><input type='text' /></td>
                </tr>
                <tr>
                  <th>Password :</th>
                  <td><input type='password' /></td>
                </tr>
              </table>
            </div>
          </div>  
          </div>
        ) : null}
        {count === 2 ? (
          <div className="container">
          <div className="row">
          <div className="col-6">
          <h1>Gaurdian Info</h1>
          <center>
          <table>
            <tr><h5 className='names'>Father</h5>
            <tr>
            <th>
              Name: 
            </th> 
            <td>
              <input type='text' value={data.fathername} />
            </td>
            <th>Job:</th>
            <td><input type='text' value={data.fatherjob}/></td>
            </tr>
            <tr>
              <th>CNIC:</th>
              <td><input type='number' /></td>
              <th>Qualification:</th>
              <td><input type='text' value={data.fatherqualification}/></td>
            </tr></tr>
            <tr ><h5 className='names'>Mother</h5>
            <tr>
            <th>
              Name:
            </th> 
            <td>
              <input type='text' value={data.mothername}/>
            </td>
            <th>Job:</th>
            <td><input type='text' value={data.motherjob}/></td>
            </tr>
            <tr>
              <th>CNIC:</th>
              <td><input type='number' value={data.mothercnic} /></td>
              <th>Qualification:</th>
              <td><input type='text' value={data.motherqualification} /></td>
            </tr></tr>
            <tr ><h5 className='names'>Gaurdian</h5>
            <tr>
            <th>
              Name:
            </th> 
            <td>
              <input type='text' value={data.gaurdianname}/>
            </td>
            <th>Job:</th>
            <td><input type='text' value={data.gaurdianjob} /></td>
            </tr>
            <tr>
              <th>CNIC:</th>
              <td><input type='number' value={data.gaurdiancnic} /></td>
              <th>Qualification:</th>
              <td><input type='text' value={data.gaurdianqualification} /></td>
            </tr>
           <tr >
           <th>
               Number:
            </th>
            <th><input type='number' value={data.gaurdiannumber} /></th>
            <th>Address:</th>
            <td><input type='text' value={data.gaurdianaddress} /></td>
           </tr>
            </tr>
          </table>
          </center>
            </div>
          </div>
          </div>
          
        ) : null}
        {count === 3 ? (
         <div className="container">
            <div className="row">
            <h3>
              Other Information
            </h3>
            
              <table>
                <tr>
                  <th>Previous School :</th>
                  <td><input type='text' /></td>
                </tr>
                <tr>
                  <th>History :</th>
                  <td><textarea /></td>
                </tr>
                <tr>
                  <th>Bio :</th>
                  <td><textarea /></td>
                </tr>
                <tr>
                  <th>Job Title :</th>
                  <td><input type='number' /></td>
                </tr>
                
              </table>
           
           </div>
         </div>
        ) : null}
        {count === 4 ? (
          <div className="container">
         <div className="row">
         <h1>Sallary Structure</h1>
            
            <center>
              <table>
                <tr>
                  <th>Addmission Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                <tr>
                  <th>Registration Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                <tr>
                  <th>Monthly Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                <tr>
                  <th>Annual Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                
              </table>
            </center>
            
             
         </div>
          </div>
        ) : null}
      
      
     
    </div></Modal.Body>
        <Modal.Footer>
        <button
        className="btn btn-dark formbtn btnns"
        type="button"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Back
      </button>
      <button
        className="btn btn-light "
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count > 3}
        style={{display : count === 4 ? 'none' : 'block'}}
      >
        Next
      </button>
      <input className="btn btn-info"
      type='submit'
      style={{display : count === 4 ? 'block' : 'none'}} />

        </Modal.Footer>
      </Modal>
            </form>
<br/>
            {/* Student Form */}
            
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button variant="info" onClick={handleStudent}>
        Register New Student
      </Button>

      <Modal show={showStdnt}
        onHide={handleStudentClose}
        backdrop="static"
        keyboard={false}
         style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Student Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
     <div className="progress" style={{width: '100%', height: '8px'}}>
         <div className="progress-bar" role="progressbar" style={{width: count === 1 ? '25%' : count === 2 ? '50%' : count === 3 ? '75%' : count === 4 ? '100%' : '' }}></div>
     </div>
     <div className="Student-form container">
        {count === 1 ? (
          <div className="Student-form container">
          <h1>Allocation</h1>
           <center>
             <table>
                <tr >
                 <h5 className='SD'> Select Details</h5>
                </tr>
                
                  
                <tr>
                <td>
                    <select className='selectoptn' value={data.session}>
                      <option>Select Session</option>
                      <option></option>
                    </select>
                  </td>
                  <td>
                    <select className='selectoptn'>
                      <option>Select School</option>
                      <option></option>
                    </select>
                  </td>
                  
                 
                </tr>
                <tr>
                <td>
                    <select className='selectoptn'>
                      <option>Select Level</option>
                      <option></option>
                    </select>
                  </td>
                    <td><select className='selectoptn'>
                      <option>Select Gender</option>
                      <option></option>
                    </select></td>
                    
                  </tr>
                  <tr >
                  <td >
                      <select className='selectoptn'>
                        <option>Select Class</option>
                        <option></option>
                      </select>
                    </td>
                    <td>
                      <select className=' selectoptn'>
                        <option>Select Section</option>
                        <option></option>
                      </select>
                    </td>
                  </tr>
             </table>
           </center>
      
          </div>
        ) : null}
        {count === 2 ? (
          <div className="container">
          <div className="row">
          <div className="col-6">
          <h1>Gaurdian Info</h1>
          <center>
          <table>
            <tr><h5 className='names'>Father</h5>
            <tr>
            <th>
              Name: 
            </th> 
            <td>
              <input type='text' value={data.fathername} />
            </td>
            <th>Job:</th>
            <td><input type='text' value={data.fatherjob}/></td>
            </tr>
            <tr>
              <th>CNIC:</th>
              <td><input type='number' /></td>
              <th>Qualification:</th>
              <td><input type='text' value={data.fatherqualification}/></td>
            </tr></tr>
            <tr ><h5 className='names'>Mother</h5>
            <tr>
            <th>
              Name:
            </th> 
            <td>
              <input type='text' value={data.mothername}/>
            </td>
            <th>Job:</th>
            <td><input type='text' value={data.motherjob}/></td>
            </tr>
            <tr>
              <th>CNIC:</th>
              <td><input type='number' value={data.mothercnic} /></td>
              <th>Qualification:</th>
              <td><input type='text' value={data.motherqualification} /></td>
            </tr></tr>
            <tr ><h5 className='names'>Gaurdian</h5>
            <tr>
            <th>
              Name:
            </th> 
            <td>
              <input type='text' value={data.gaurdianname}/>
            </td>
            <th>Job:</th>
            <td><input type='text' value={data.gaurdianjob} /></td>
            </tr>
            <tr>
              <th>CNIC:</th>
              <td><input type='number' value={data.gaurdiancnic} /></td>
              <th>Qualification:</th>
              <td><input type='text' value={data.gaurdianqualification} /></td>
            </tr>
           <tr >
           <th>
               Number:
            </th>
            <th><input type='number' value={data.gaurdiannumber} /></th>
            <th>Address:</th>
            <td><input type='text' value={data.gaurdianaddress} /></td>
           </tr>
            </tr>
          </table>
          </center>
            </div>
          </div>
          </div>
          
        ) : null}
        {count === 3 ? (
         <div className="container">
            <div className="row">
            <h3>
              Student Info
            </h3>
           <div className='col-6'>
             <table>
             <tr className='stdntinp'>
               <th>Registration #</th>
               <td><input type='text'  value={data.registrationnumber} /></td>
             </tr>
             <tr className='stdntinp'>
               <th>Rol #</th>
               <td><input type='text' value={data.rollno} /></td>
             </tr>
                <tr>
                  <th>
                    First Name:
                  </th>
                  <th>
                    <input type='text' value={data.firstname} />
                  </th>
                </tr>
                <tr>
                  <th>Last Name :</th>
                  <td><input type='text' value={data.lastname} /></td>
                  </tr>
                  <tr>
                    <th>Date Of Birth</th>
                    <td>
                      <input type='date' value={data.dateofbirth} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Home Address
                    </th>
                    <td>
                      <textarea rows='2' cols='17' value={data.homeaddress} />
                    </td>
                  </tr>
             </table>
             </div>
          <div className='col-6'>
            <table>
              <tr>
                <th>
                  Mobile No :
                </th>
                <td>
                  <input type='number' value={data.mobileno} />
                </td>
              </tr>
              <tr>
                <th>Bio :</th>
                <td>
                  <textarea value={data.bio} />
                </td>
              </tr>
              <tr>
                <th>
                  Previous School :
                </th>
                <td>
                  <input type='text' value={data.previousschool} />
                </td>
              </tr>
              <tr>
                <th>Religon</th>
                <td>
                  <input type='text' value={data.religon} />
                </td>
              </tr>
              <tr>
                <th>Date Of Addmission</th>
                <td>
                  <input type='date' value={data.dateofaddmission} />
                </td>
              </tr>

            </table>
          </div>
            </div>
         </div>
        ) : null}
        {count === 4 ? (
          <div className="container">
         <div className="row">
         <h1>Fee Structure</h1>
            
            <center>
              <table>
                <tr>
                  <th>Addmission Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                <tr>
                  <th>Registration Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                <tr>
                  <th>Monthly Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                <tr>
                  <th>Annual Fee :</th>
                  <td><input type='number' /></td>
                </tr>
                
              </table>
            </center>
            
             
         </div>
          </div>
        ) : null}
      
      
     
    </div></Modal.Body>
        <Modal.Footer>
        <button
        className="btn btn-dark formbtn btnns"
        type="button"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Back
      </button>
      <button
        className="btn btn-light "
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count > 3}
        style={{display : count === 4 ? 'none' : 'block'}}
      >
        Next
      </button>
      <input className="btn btn-info"
      type='submit'
      style={{display : count === 4 ? 'block' : 'none'}} />

        </Modal.Footer>
      </Modal>
            </form>
            {/* School Form */}
            <br/>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleSchool}>
        Register School
      </Button>

      <Modal show={showSchool}
        onHide={handleSchoolClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>School Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <div>
                <center>
                    <table>
                    <h3>School Details</h3>
                        <tr>
                            <th>School Name :</th>
                            <td><input type='text' /></td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td><input type='email' /></td>
                        </tr>
                        <tr>
                            <th>Phone Number :</th>
                            <td><input type='tel' /></td>
                        </tr>
                        <tr>
                            <th>Phone Number 2 :</th>
                            <td><input type='tel' /></td>
                        </tr>
                        <tr>
                            <th>Location :</th>
                            <td><input type='text' /></td>
                        </tr>
                        <tr>
                            <th>Representative :</th>
                            <td><input type='text' /></td>
                        </tr>
                    </table>
                </center>
            </div>
     </Modal.Body>
     
     
        <Modal.Footer>
      <input className="btn btn-info"
      type='submit'
       />
        </Modal.Footer>
      </Modal>
     </form>

     {/* Session Modal */}
     <br/>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleSession}>
        Register Session
      </Button>

      <Modal show={setSession}
        onHide={handleSessionClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Session Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <div>
                <center>
                    <table>
                    <h3>Session Details</h3>
                        <tr>
                            <th>School Name :</th>
                            <td><select>
                                <option>Select School</option>
                                <option></option>
                            </select></td>
                        </tr>
                        <tr>
                            <th>Session Start :</th>
                            <th>Session End :</th>
                        </tr>
                        <tr>
                            <td><input type='date' /></td>
                            <td><input type='date' /></td>
                        </tr>
                    </table>
                </center>
            </div>
     </Modal.Body>
     
     
        <Modal.Footer>
      <input className="btn btn-info"
      type='submit'
       />
        </Modal.Footer>
      </Modal>
     </form>
            {/* Level Modal */}
     <br/>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleLevel}>
        Register Level
      </Button>

      <Modal show={setLevel}
        onHide={handleLevelClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Level Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <div>
                <center>
                    <table>
                    <h3>Level Details</h3>
                        <tr>
                            <th>School Name :</th>
                            <td><select>
                                <option>Select School</option>
                                <option></option>
                            </select></td>
                        </tr>
                        <tr>
                            <th>Select Session :</th>
                            <td>
                                <select>
                                    <option>Select Session</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Name Level :</th>
                            <td><input type='text' /></td>
                        </tr>
                    </table>
                </center>
            </div>
     </Modal.Body>
     
     
        <Modal.Footer>
      <input className="btn btn-info"
      type='submit'
       />
        </Modal.Footer>
      </Modal>
     </form>

     {/* Gender Modal */}

     <br/>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleGender}>
        Register Gender
      </Button>

      <Modal show={setGender}
        onHide={handleGenderClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Gender Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <div>
                <center>
                    <table>
                    <h3>Gender Details</h3>
                       
                        <tr>
                            <th>Select School :</th>
                            <td>
                                <select>
                                    <option>Select School</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Select Session :</th>
                            <td>
                                <select>
                                    <option>Select Session</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Select Level :</th>
                            <td>
                                <select>
                                    <option>Select Level</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Gender :</th>
                            <td><input type='text' /></td>
                        </tr>
                    </table>
                </center>
            </div>
     </Modal.Body>
     
     
        <Modal.Footer>
      <input className="btn btn-info"
      type='submit'
       />
        </Modal.Footer>
      </Modal>
     </form>

    {/* Class Modal */}

    <br/>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleClass}>
        Register Class
      </Button>

      <Modal show={setClass}
        onHide={handleClassClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Class Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <div>
                <center>
                    <table>
                    <h3>Class Details</h3>
                        <tr>
                            <th>School Name :</th>
                            <td><select>
                                <option>Select School</option>
                                <option></option>
                            </select></td>
                        </tr>
                        <tr>
                            <th>Select Session :</th>
                            <td>
                                <select>
                                    <option>Select Level</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Select Level :</th>
                            <td>
                                <select>
                                    <option>Select Level</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Gender :</th>
                            <td>
                                <select>
                                    <option>Select Gender</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Class Name :</th>
                            <td><input type='text' /></td>
                        </tr>
                    </table>
                </center>
            </div>
     </Modal.Body>
     
     
        <Modal.Footer>
      <input className="btn btn-info"
      type='submit'
       />
        </Modal.Footer>
      </Modal>
     </form>

     {/* Section Modal */}

     <br/>
            <form
        onSubmit={handleSubmit(onSubmit)}
      >
       
        <Button variant="info" onClick={handleSection}>
        Register Section
      </Button>

      <Modal show={setSection}
        onHide={handleSectionClose}
        backdrop="static"
        keyboard={false} style={{width: '100%'}}>
        <Modal.Header closeButton style={{height: '50px'}}>
          <Modal.Title>Section Form</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <div>
                <center>
                    <table>
                    <h3>Section Details</h3>
                        <tr>
                            <th>School Name :</th>
                            <td><select>
                                <option>Select School</option>
                                <option></option>
                            </select></td>
                        </tr>
                        <tr>
                            <th>Select Session :</th>
                            <td>
                                <select>
                                    <option>Select Level</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Select Level :</th>
                            <td>
                                <select>
                                    <option>Select Level</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Gender :</th>
                            <td>
                                <select>
                                    <option>Select Gender</option>
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Class Name :</th>
                            <td><select>
                                <option>Select Class</option>
                                <option></option>
                            </select></td>
                        </tr>
                        <tr>
                            <th>Section Name :</th>
                            <td><input type='text' /></td>
                        </tr>
                    </table>
                </center>
            </div>
     </Modal.Body>
     
     
        <Modal.Footer>
      <input className="btn btn-info"
      type='submit'
       />
        </Modal.Footer>
      </Modal>
     </form>
        </div>
    )
}

export default Forms

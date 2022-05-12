// const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("")
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [link, setLink] = useState("");

//   const [sessionId, setSessionId] = useState(null);
//   const [sessions, setSessions] = useState([]);

//   const auth= useSelector((state) => state.auth)
//   const dispatch=useDispatch()
//   console.log(auth);

//   useEffect(() => {
//     refreshSessions();
//   }, []);

//   const refreshSessions = () => {
//     API.get("/")
//       .then((res) => {
//         setSessions(res.data);
//       })
//       .catch(console.error);
//   };
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // e.target.reset();
//     let item = { title, description, date, time, link };
//     API.post("/", item).then(() => refreshSessions());
//     setTitle("")
//     setDescription("")
//     setDate("")
//     setTime("")
//     setLink("")
//   };

//   const onUpdate = (id) => {
//     let item = { title, description, date, time, link };
//     API.patch(`/${id}/`, item).then((res) => refreshSessions());
//     setTitle("")
//     setDescription("")
//     setDate("")
//     setTime("")
//     setLink("")

//   const onDelete = (id) => {
//     API.delete(`/${id}/`).then((res) => refreshSessions());
//   };
//   function selectSession(id) {
//     let item = sessions.filter((session) => session.id === id)[0];
//     setTitle(item.title);
//     setDescription(item.description);
//     setDate(item.date);
//     setTime(item.time);
//     setLink(item.link);
//     setSessionId(item.id);
//   }



//   return (
//     <div>
//         <div className="container mt-5">
//       <div className="row">
//       {auth.isStudent ? null:<>
//         <div className="col-md-4 mt-5">
        
//           <h3 className="float-left mt-4">Add A New Shedule </h3>
//           <Form onSubmit={onSubmit} className="mt-4">
//             <Form.Group className="mb-3" controlId="formBasicDay">
//               <Form.Label>{sessionId}Shedule Day</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter The Day"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicDetails">
//               <Form.Label>Activity</Form.Label>
//               <Form.Control
//                 type="textarea"
//                 placeholder="Enter Details"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicTime">
//               <Form.Label> Schedule Time</Form.Label>
//               <Form.Control
//                 type="date"
//                 placeholder="Time"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicTime">
//               <Form.Label> Schedule Time</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicTime">
//               <Form.Label> Schedule Time</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Time"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//               />
//             </Form.Group>

//             <div className="float-right">
//               <Button
//                 variant="primary"
//                 type="submit"
//                 onClick={onSubmit}
//                 className="mx-2"
//               >
//                 Save
//               </Button>
//               <Button
//                 variant="primary"
//                 type="button"
//                 onClick={() => onUpdate(sessionId)}
//                 className="mx-2"
//               >
//                 Update
//               </Button>
//             </div>
//           </Form>
          
//         </div>
//         </>}
//         <div className="col-md-8 mt-5">
//           <h3>The Schedule</h3>
//           <table class="table mt-4">
//             <thead>
//               <tr>
//                 <th scope="col"></th>
//                 <th scope="col">Day</th>
//                 <th scope="col">Activity</th>
//                 <th scope="col">Time</th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {sessions.map((session, index) => {
//                 return (
//                   <tr key="">
//                     <th scope="row">{session.id}</th>
//                     <td> {session.day}</td>
//                     <td>{session.details}</td>
//                     <td>{session.time}</td>
                    
//                     <td>
//                     {auth.isStudent ? null: <>
//                       <button onClick={() => selectSession(session.id)} className="btn btn-secondary">Edit</button>
//                       <button onClick={() => onDelete(session.id)} className="btn btn-danger">Delete</button>
//                       </>}
                    
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     </div>
//   )

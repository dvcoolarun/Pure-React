## /* ES6 way of making a component available, 
  so it can be imported into another files. */

/* The "default" means that this is the 
   component we'll get when we use 

   **   import Time from './time' 

Another Way is make this named export, 
which would look like export { Time },
with the braces. 

Then the corresponding import would look like
import { Time } from './time'


*/

export default Time;

Import are all about the braces, No braces you're exporting defaults,
With Braces? "You are importing a **named export**.(If without the braces.)" You can mix them.

// const FileListItem = ({ file }) => (
//     <tr className="file-list-item">
//       <td><FileIcon file={file}/></td>
//       <td><FileName file={file}/></td>
//       <td><CommitMessage file={file}/></td>
//       <td><Time time={file.updated_at}/></td>
//     </tr>
// );

// function FileIcon({ file }) {
//     let icon = 'fa-file-text-o';

//     if(file.type === 'folder') {
//         icon = 'fa-folder';
//     }
//     return (
//         <td className="file-icon">
//           <i className={`fa ${icon}`}/>
//         </td>
//     );
// }

// function FileName({ file }) {
//     return (
//         <React.Fragment>
//           <FileIcon file={file}/>
//           <td className="file-name">{file.name}</td>
//         </React.Fragment>
//     );
// }


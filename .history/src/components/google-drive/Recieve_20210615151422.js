import React from 'react';
import firebase from "../../firebase"
import NavbarComponent from './Navbar';
import { Container } from "react-bootstrap"
import CenteredContainer from "../authentication/CenteredContainer"


class Recieve extends React.Component{
    constructor(){
        super();
        this.state = {
            PROGRESS:0,
            FILES:[]
        }
    }
    download = () => {
        let files = this.state.FILES 
        let len = files.length;
        let step = (100/len).toFixed(10)
        this.setState ({PROGRESS : parseFloat(0)})
        if(len > 0){
            let i;  
            for(i=0;i<len;i++){
                const storageRef  = firebase.storage.ref();
                var starsRef = storageRef.child(files[i]);
                starsRef.getDownloadURL()
                .then((url) => {
                    let oldval  = this.state.PROGRESS
                    this.setState ({PROGRESS : parseFloat(oldval)+parseFloat(step)})
                    document.getElementById('input').value = '';
                    console.log(url)
                   let element = document.createElement('a'); 
                   element.setAttribute('href', url); 
                   element.setAttribute('target', "_blank"); 
                   document.body.appendChild(element); 
                   element.click(); 
                   document.body.removeChild(element); 

                }).catch((error) => {
                    console.log(error)
                    document.getElementById("alertRecieve").style.display = "block"
                    document.getElementById("alertRecieve").innerHTML="Unable to Download File"
                    setTimeout(function(){ 
                        document.getElementById("alertRecieve").style.display="none"; 
                    }, 3000);
                });
            }      
        }
    }
    checkFiles = () => {
        let text = document.getElementById('input').value
        if (text.length>0){
            console.log('true')
            const storageRef  = firebase.storage().ref();
            var listRef = storageRef.child(text+"/");
            listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
                    this.state.FILES.push(itemRef.location.path)
            });
            })
            .then(() => {
                if(this.state.FILES.length>0){
                    this.download()
                }
                else{
                    document.getElementById("alertRecieve").style.display = "block"
                    document.getElementById("alertRecieve").innerHTML="Either the name you Entered is wrong or the item has expired"
                    setTimeout(function(){ 
                        document.getElementById("alertRecieve").style.display="none"; 
                    }, 4000);
                }
            })
            .catch(function(error) {
                document.getElementById("alertRecieve").style.display = "block"
                document.getElementById("alertRecieve").innerHTML="We faced some error while searching for your files please try again!!"
                    setTimeout(function(){ 
                        document.getElementById("alertRecieve").style.display="none"; 
                    }, 4000);
            });
        }
        else{
            document.getElementById("alertRecieve").style.display = "block"
            document.getElementById("alertRecieve").innerHTML="Enter a valid Name"
            setTimeout(function(){ 
                document.getElementById("alertRecieve").style.display="none"; 
            }, 1500);
        }
    }
    inputHighlight = () => {
        let input = document.getElementById("input");
        input.style.border="none";
        input.style.borderBottom = "1px solid #6125ac";
    }
    render(){
        return(
            <>
            <NavbarComponent/>
            <CenteredContainer>
            <Container fluid>
        <div className="d-flex align-items-center">
            <div className="Recieve">
                <div className="ContentPanel">
                    <div className="contentPanelElements">
                        <progress id="statusIndicator" value={this.state.PROGRESS} max="100" />
                        <input type="text" placeholder="Enter Download Code" id="input" autoComplete="off" onFocus={this.inputHighlight}/>
                        <button id="download" onClick={this.checkFiles}>Download</button>
                    </div>
                </div>
                <div color="danger" id="alertRecieve">
                </div>
            </div>
            </div>
            </Container>
            </CenteredContainer>
            </>
        );
    }
}

export default Recieve;
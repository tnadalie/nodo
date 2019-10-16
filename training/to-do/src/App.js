import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBNavLink, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./index.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
    state = {};

    constructor(props) {
      super(props)
      this.state = {
        items: [
          {id: 1, title: "Pollo", recipe: "a la diabla"},
          {id: 2, title: "Camaron"}
        ]
      };
    }


    render() {
      return (
        <Router>
        <React.Fragment>

               <MDBContainer>
               <MDBNavLink className="list-group-item list-group-item-action" to="toto" >
                 <h5 style={{ margin: "0" }} className="justify-content-between d-flex align-items-center">
                   MACB
                   <MDBIcon icon="angle-right" />
                 </h5>
               </MDBNavLink>
                   <MDBRow>
                   <MDBCol md="9">
                   <MDBCard style={{ width: "22rem" }}>
                   <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    <Item title="Pollo" recipe="a la diabla"/><Item title="Pollo" recipe="al curry"/>
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>

                  </MDBCard>
                  </MDBCol>
                   <MDBCol md="3">
                   {this.state.items.map(item => (
                       <Item id={item.id} key={item.id} title={item.title} recipe={item.recipe} />
                     ))}
                   </MDBCol>
                 </MDBRow>
               </MDBContainer>
               </React.Fragment>
               </Router>
              );
    }
  }

class Item extends Component {
    constructor(props) {
      super(props)
      this.state = {
        modal: false,
        title: this.props.title,
        recipe: this.props.recipe
      };
    }
    toggleModal = () => {
        this.setState({
          modal: !this.state.modal
        });
      };
    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
          [inputName]: nextValue
        });
        console.log(this.state);
      };

    addItem = () => {
      var newArray = [...this.state.items];
      newArray.push({
        id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
        title: this.state.title,
        location: this.state.recipe
      });
      this.setState({ items: newArray });
      this.setState({
        title: "",
        recipe: ""
      });
    };

    render() {
      return (
        <React.Fragment>
          <h6>Comida: {this.state.title}</h6> {this.state.recipe && <h6>Recipe: {this.state.recipe}</h6>}
        { this.state.recipe &&
            <React.Fragment>
            <MDBBtn
              onClick={() => {
                this.setState({ recipe: "Nueva receta"});
              }}
            >
              Change receta
            </MDBBtn>
          </React.Fragment>
        }
        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
           <MDBModalHeader
             className="text-center"
             titleClass="w-100 font-weight-bold"
             toggle={this.toggleModal}
           >
             Add new event
           </MDBModalHeader>
           <MDBModalBody>
           <form className="mx-3 grey-text">
               <MDBInput
                 name="title"
                 label="Title"
                 icon="edit"
                 hint="Briefing"
                 group
                 type="text"
                 getValue={this.handleInputChange("title")}
               />
               <MDBInput
                 name="recipe"
                 label="Recipe"
                 group
                 type="text"
                 getValue={this.handleInputChange("recipe")}
               />
             </form>
           </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
          <MDBBtn
            color="info"
            onClick={() => {
              this.toggleModal();
              this.addItem();
            }}
          >
            Add
          </MDBBtn>
           </MDBModalFooter>
         </MDBModal>
        <MDBBtn color="info" rounded onClick={this.toggleModal}>
            Add Recipe
        </MDBBtn>
        </React.Fragment>
      )
    }
}

export default App;

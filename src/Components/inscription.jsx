import React, { Component } from "react";

class FormulaireInscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifiant: "",
      motDePasse: "",
      dateNaissance: "",
      ville: "Casablanca",
      genre: "Homme",
      loisirs: [],
      photo: false,
      fichier: null,
      succesMessage: "",
    };
  }

handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "loisirs") {
      this.setState((prevState) => {
        let nouveauxLoisirs = [...prevState.loisirs];   
        if (checked) {
          nouveauxLoisirs.push(value);
        } else {
          nouveauxLoisirs = nouveauxLoisirs.filter((loisir) => loisir !== value);
        }
        return { loisirs: nouveauxLoisirs };
      });
    } 
    else if (type === "checkbox") {
      this.setState({ [name]: checked });
    } 
    else if (type === "file") {
      this.setState({ [name]: files[0] });
    } 
    else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { identifiant, dateNaissance, ville, loisirs } = this.state;
   const loisirsText = loisirs.join(",")
   // const loisirsText = "loisir";

    const succesMessage = `Je suis ${identifiant} né le ${dateNaissance} à ${ville} et mes loisirs sont: ${loisirsText}.`;
    this.setState({ succesMessage });
  };

  render() {
    return (
      <div>
        <h1>Inscription</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Identifiant:</label>
            <input
              type="text"
              name="identifiant"
              value={this.state.identifiant}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input
              type="password"
              name="motDePasse"
              value={this.state.motDePasse}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Date de naissance:</label>
            <input
              type="date"
              name="dateNaissance"
              value={this.state.dateNaissance}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Ville:</label>
            <select
              name="ville"
              value={this.state.ville}
              onChange={this.handleInputChange}
            >
              <option value="Casablanca">Casablanca</option>
              <option value="Nador">Nador</option>
            </select>
          </div>
          <div>
            <label>Genre:</label>
            <input
              type="checkbox"
              name="genre"
              value="Homme"
              checked={this.state.genre === "Homme"}
              onChange={this.handleInputChange}
            />
            Homme
            <input
              type="radio"
              name="genre"
              value="Femme"
              checked={this.state.genre === "Femme"}
              onChange={this.handleInputChange}
            />
            Femme
          </div>
          <div>
            <label>Loisirs:</label>
            <input
              type="checkbox"
              name="loisirs"
              value="Sport"
              checked={this.state.loisirs.includes("Sport")}
              onChange={this.handleInputChange}
            />
            Sport
            <input
              type="checkbox"
              name="loisirs"
              value="Lecture"
              checked={this.state.loisirs.includes("Lecture")}
              onChange={this.handleInputChange}
            />
            Lecture
            <input
              type="checkbox"
              name="loisirs"
              value="Musique"
              checked={this.state.loisirs.includes("Musique")}
              onChange={this.handleInputChange}
            />
            Musique
          </div>
          <div>
            <label>Photo:</label>
            <input
              type="checkbox"
              name="photo"
              checked={this.state.photo}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Choisir un fichier:</label>
            <input
              type="file"
              name="fichier"
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        {this.state.succesMessage && (
          <div>
            <h2>Message de réussite:</h2>
            <p>{this.state.succesMessage}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FormulaireInscription;

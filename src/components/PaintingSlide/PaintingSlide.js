import React, { Component } from "react";
import Slide from "../Slide/Slide";
import Paintings from "../../paintings.json";

class PaintingSlide extends Component {
  // Setting our component's initial state
  state = {
    slideIndex: 0,
    images: Paintings,
    hide: {
      display: "none"
    },
    show: {
      display: "block"
    },
    page: this.props.name
  };

nextSlide = event => {
    var slideCount = this.state.slideIndex + 1;
    if (slideCount >= this.state.images.length ) {this.setState({ slideIndex: 0})}
    else if (slideCount <= this.state.images.length -1 ) {this.setState({ slideIndex: slideCount})};
  };

  prevSlide = event => {
    var slideCount = this.state.slideIndex - 1;
    if (slideCount < 0) {
      this.setState({ slideIndex: this.state.images.length -1})
    }
    else if (slideCount <= this.state.images.length) {
      this.setState({ slideIndex: slideCount})
    };
  };

  render() {
    return (
      <>
        <div className="slideshow-container">
          <div className="inner paintings">
            {this.state.images.map(image => {
                return <Slide image={image.image} key={image.id} caption={""} slideNumber={(parseInt(image.id) + 1)  + " / " + this.state.images.length } style={(this.state.slideIndex === image.id) ? this.state.show: this.state.hide } />
            })}
          </div>

          <button className="prev" onClick={this.prevSlide}>&#10094;</button>
          <button className="next" onClick={this.nextSlide}>&#10095;</button>
        </div>
        <br />
        </>
      );
    }
  }
  
export default PaintingSlide;
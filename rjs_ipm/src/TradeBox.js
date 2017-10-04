import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Intent, 
        Spinner, 
        DatePickerFactory, 
        NumericInput,
        Overlay,
        Classes,
	    	Button, 
	    	Popover, 
	    	PopoverInteractionKind, 
	    	Position} from "@blueprintjs/core";

import Flexbox from 'flexbox-react';
import autoBind from 'react-autobind';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

export default class TradeBox extends Component {


	constructor(props) {
    super(props);
    this.state = {value: 0,
    							isOpen: false	};

    autoBind(this);
	}

	toggleOverlay() {
		this.setState({isOpen: !this.state.isOpen})
	}

	render() {
		// const classes = classNames(Classes.CARD, Classes.ELEVATION_4, OVERLAY_EXAMPLE_CLASS, this.props.themeName);
    return (
    	<Flexbox flexDirection='column' flex='6'>
        <div class="pt-card pt-elevation-0 pt-interactive">
          <h5><a href="#">Market 1</a></h5>
          <p>{this.state.value} </p>
          <Flexbox flexDirection='row' justifyContent='space-between'>
            <NumericInput 
              value={this.state.value} 
              onValueChange={(vnum, vstring) => this.setState({value: vnum})} />
             
            <button type="button" class="pt-button pt-intent-success">
              Submit
              <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
            </button>
            

          </Flexbox>
          <br/>
          <Popover
            interactionKind={PopoverInteractionKind.CLICK}
            popoverClassName="pt-popover-content-sizing"
            position={Position.RIGHT}
            isModal={true}
        		>
            <Button intent={Intent.PRIMARY}>Popover target</Button>
            <div>
			        <h5>Popover title</h5>
			        <p>...</p>
			        <Button className="pt-popover-dismiss">Dismiss</Button>
			      </div>
        	</Popover>
          
        </div>
       </Flexbox>
    );
	}
};
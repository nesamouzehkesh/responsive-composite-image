# Composite Image
* [CompositeImage Demo](https://nesamouzehkesh.github.io/)
* [CompositeImage Documentation](https://nesamouzehkesh.github.io/styleguide)

## The challenge:
Create a view with a component that looks like the attached composite image using your preferred elements and the assets from this ZIP.

## Tasks
1. Utilise React `styled-components` on a simple React view to reach the goal.
1. Post the solution to a viewable directory on github.io.

---

## Addressed criteria:

### Responsiveness:

*	*Mobile first approach*; Did the styling for a small device first and used *Media Queries* to make that responsive to bigger devices (Tablet, Desktop). Please check the assumptions section for the breakpoints considered. 

* Checked the responsiveness in Chrome devtools for different devices. 


### Reusability:
#### The components are reuasble because:

* They are `styled components` meaning that their styles come together with their JSX file. Styled components are reusable as the CSS rules defined for the component do not live in the global scope. They are also great for sharing common styles between components by just exporting them.

* The `CompositeImage` component is made flexibile by providing certain props such as `margin`, `width` and `opacity` meaning these styles can be set for the component by the ones using it.


### Maintainability: 
	
* *Type checking* is an important factor in maintaining a component structure. It reassures valid types for the provided props for example. Different approaches can be used such as React's `PorpTypes` which has been used for this project which could also be seen as a good component documentation source when a developer looks at it. Other available tools are: `Typescript` and `Flow`. 

* Testing! Snapshot testing has been used for this project. 

* `StyleGuide` has been added to this projects as documentation tool for other developers. It can demo different use cases of a component so would be beneficial for new members of the team to refer to if need be. 
[CompositeImage Documentation](https://nesamouzehkesh.github.io/styleguide)

* Proper sepration of concerns; the `CompositeImage` component for example has two smaller sub components, `Body` (for the body of `CompositeImage`) and `Footer` (for the footer of `CompositeImage`). Footer is defined as a componnet so later we can add more functionality to it if need be. 


### Assumptions: 
 
* The breakpoints used for media queries: 

	###### /* Tablets, Ipads (portrait) */
  `(min-width: 768px) and (max-width: 1024px)`

	###### /* Laptops, Desktops */
  `(min-width: 1025px) and (max-width: 1280px)`

	###### /* Desktops */
  `(min-width: 1281px)`

* Different fixed font-sizes have been assumed for different screen sizes. 

---

## Coding Style Guide
For this project I used: [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

---

## To run:

* To start the app for development: `npm start`

* To build the app: `npm run build`

* To start the styleguidist server for generating docuementation: `npm run doc:start`

* To build the docuementation: `npm run doc:build`

* To test `npm run test`

import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import Icon from '../images/Reuleaux.svg'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled:false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Icon />
          <Link to="/">Work</Link>
          <Link to="/course">Course</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/all">All</Link>
        </div>
      </div>
    )
  }
}

export default Header

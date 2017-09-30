import React, { Component } from 'react';
import './section.css';
import content from '../../locale/locale';

const screens = [
    'home', 'history', 'programs', 'commingEvents', 'members', 'gallery', 'contactUs'
];
class Section extends Component {
    render() {
        return (
            <div className="section">
                <nav id="scrollspy-nav" className="navbar navbar-toggleable-md">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a className="nav-link" href="#sec1">Section 1</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sec2">Section 2</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sec3">Section 3</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sec4">Section 4</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sec5">Section 5</a></li>
                        <li className="nav-item"><a className="nav-link" href="#sec6">Section 6</a></li>
                    </ul>
                </nav>
                <article data-spy="scroll" data="#scrollspy-nav" data-offset="0" className="section-content" 
                    style={{overflow: 'scroll', height: '100vh'}}>
                    <h4 id="sec1">Section 1</h4>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <h4 id="sec2">Section 2</h4>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <h4 id="sec3">Section 3</h4>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <h4 id="sec4">Section 4</h4>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <h4 id="sec5">Section 5</h4>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <h4 id="sec6">Section 6</h4>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                    <p>
                        Add a custom easing animation to the smooth option. This prop will accept a Boolean if you want the default, or any of the animations listed below,
                        The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling. No active states are included in the base nav.
                    </p>
                </article>
            </div>
        );
    }
}

export default Section;

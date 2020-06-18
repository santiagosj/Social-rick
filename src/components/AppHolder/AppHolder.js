import React,{ Component} from 'react'
import Navbar from '../layout/Navbar'
import MainContent from '../MainContent/MainContent'
//import Parallax from 'parallax-js'
import portal_0 from '../../assets/portal.png'
import portal_1 from '../../assets/portal-1.png'
import portal_2 from '../../assets/portal-2.png'
import portal_3 from '../../assets/portal-3.png'
import logo from '../../assets/logo.png'
import rickMorty from '../../assets/rick-morty.png'
import './AppHolder.scss'

class AppHolder extends Component  {
  
    constructor(props) {
        super(props);
        this.state = {};
        this.scene = React.createRef();
      }

      /*componentDidUpdate(){
        if (this.scene) {
            var childNodes = this.scene.current.childNodes;
            var i;
            for (i = 0; i < childNodes.length; i++) {
              this.parallax = new Parallax(childNodes[i]);
            }
          } else {
            return null;
          }
     }

     componentWillUnmount(){
        this.parallax.disable()
     }*/

    render(){
        return (
            <div className="appHolder">
               <div 
                    className="parallax-container" 
                    ref={this.scene}
                    data-relative-input="true"
                    data-hover-only="true"
                    data-clip-relative-input="true"
               >
                      
                  <div className="imgs-container">
                      <img 
                            data-depth={`0.4`}
                            src={portal_0} 
                            style={{position:'absolute',top:'25%',width:390}}
                            alt={'portal'}
                            className={`portal-0`}
                          />
                          <img 
                            data-depth={`0.4`}
                            src={portal_3} 
                            style={{position:'absolute',top:'25%',width:390}}
                            alt={'portal'}
                            className={`portal-3`}
                          />
                          <img 
                            data-depth={`0.4`}
                            src={portal_1} 
                            style={{position:'absolute',top:'25%',width:390}}
                            alt={'portal'}
                            className={`portal-1`}
                          />
                          <img 
                            data-depth={`0.4`}
                            src={portal_2} 
                            style={{position:'absolute',top:'25%',width:390}}
                            alt={'portal'}
                            className={`portal-2`}
                          />
                          
                          <img 
                            data-depth={`0.4`}
                            src={logo} 
                            style={{position:'absolute',top:'25%',width:390}}
                            alt={'portal'}
                            className={``}
                          />
                          <img 
                            data-depth={`0.4`}
                            src={rickMorty} 
                            style={{position:'absolute',top:'25%',width:390}}
                            alt={'portal'}
                            className={``}
                          />
                  </div>    
                     
                 
               </div>
    
               <Navbar />
               <MainContent />
            </div>
        )
    }
    
}

export default AppHolder

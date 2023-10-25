import React,{useState} from 'react';
import "../styles/tabs.css";
// tab code
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'DETAILS',
            //title: 'Title 1',
            content: 'DETAILS Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            editorNote:"See the ",
            editorLink:"EDITOR'S NOTE",
            designer:"Lear about the ",
            designerLink:"DESIGNER"
        },
        {
            id: 2,
            tabTitle: 'DELIVERY',
            //title: 'Title 2',
            content: 'DELIVERY Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            editorNote:"See the ",
            editorLink:"EDITOR'S NOTE",
            designer:"Lear about the ",
            designerLink:"DESIGNER"
        },
        {
            id: 3,
            tabTitle: 'FIT',
            //title: 'Title 3',
            content: 'FIT Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            editorNote:"See the ",
            editorLink:"EDITOR'S NOTE",
            designer:"Lear about the ",
            designerLink:"DESIGNER"
        },
        {
            id: 4,
            tabTitle: 'SHARE',
            //title: 'Title 4',
            content: 'SHARE Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            editorNote:"See the ",
            editorLink:"EDITOR'S NOTE",
            designer:"Lear about the ",
            designerLink:"DESIGNER"
        }
    ];
       // end tab
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    const editorLink= ()=>{
        alert("editorLink clicked")
    }
    const designerLink= ()=>{
        alert("designerLink clicked")
    }
// sticky 
const sizeGuid=()=>{
    alert("sizeGuid");
}
const addBag=()=>{
    alert("addBag clicked");
}

const [fix, setFix] = useState(false);
function setFixedSidebar(){
if(window.scrollY >=300){
    setFix(true)
    }else{
    setFix(false)
}
}
window.addEventListener("scroll", setFixedSidebar);


    return (
        
        <div className='container1'>
          <div className={fix ? 'fixed':''}>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} 
                    onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className={fix ? 'tabContent widthChange':'tabContent'}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div>
                            <p>{tab.content}</p>
                            <p className="editor-note">{tab.editorNote}<u onClick={editorLink}>{tab.editorLink}</u></p>
                            <p className="tab-designer">{tab.designer}<u onClick={designerLink}>{tab.designerLink}</u></p>
                        </div>}
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}

export default Tabs;
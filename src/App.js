import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Career from "./screens/career/Career";
import About from "./screens/about/About";
import ContactUs from "./screens/contactus/ContactUs";
import MobileAppDevelopment from "./screens/servicessection/mobiledevelopment/MobileAppDevelopment";
import WebAppDevelopment from "./screens/servicessection/webdevelopment/WebAppDevelopment";
import CustomSoftwareDevelopment from "./screens/servicessection/customsoftwaredevelopment/CustomSoftwareDevelopment";
import GraphicDesign from "./screens/servicessection/graphicdesign/GraphicDesign";
import DigitalMarketing from "./screens/servicessection/digitalmarketing/DigitalMarketing";
import QualityAssurance from "./screens/servicessection/qualityassurance/QualityAssurance";
import ReactJS from "./screens/technologies/reactjs/ReactJS";
import AngularJS from "./screens/technologies/angularjs/AngularJS";
import NodeJS from "./screens/technologies/nodejs/NodeJS";
import PHP from "./screens/technologies/php/PHP";
import WordPress from "./screens/technologies/wordpress/WordPress";
import ReactNative from "./screens/technologies/reactnative/ReactNative";
import Flutter from "./screens/technologies/flutter/Flutter";
import Android from "./screens/technologies/android/Android";
import IOS from "./screens/technologies/ios/iOS";
import Java from "./screens/technologies/java/Java";
import CrushApp from "./screens/tabscreens/CrushApp";
import Easi from "./screens/tabscreens/Easi";
import Enrollin from "./screens/tabscreens/Enrollin";
import Nuntucket from "./screens/tabscreens/Nuntucket";
import Sameep from "./screens/tabscreens/Sameep";
import OpenAI from "./screens/tabscreens/OpenAI";
import ChatGPT from "./screens/tabscreens/ChatGPT";
import EnrollinApp from "./screens/tabscreens/EnrollinApp";
import NantucketWeb from "./screens/tabscreens/NantucketWeb";
import jPad from "./screens/tabscreens/jPad";
import jPadAdminPanel from "./screens/tabscreens/jPadAdminPanel";
import Brochure from "./screens/tabscreens/Brochure";
import Epic from "./screens/tabscreens/Epic";
import Crush from "./screens/tabscreens/Crush";
import Inbines from "./screens/tabscreens/Inbines";
import Acorn from "./screens/tabscreens/Acorn";
import Sp from "./screens/tabscreens/Sp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Career" Component={Career} />
        <Route path="/About" Component={About} />
        <Route path="/ContactUs" Component={ContactUs} />
        <Route path="/MobileAppDevelopment" Component={MobileAppDevelopment} />
        <Route path="/WebAppDevelopment" Component={WebAppDevelopment} />
        <Route
          path="/CustomSoftwareDevelopment"
          Component={CustomSoftwareDevelopment}
        />
        <Route path="/GraphicDesign" Component={GraphicDesign} />
        <Route path="/DigitalMarketing" Component={DigitalMarketing} />
        <Route path="/QualityAssurance" Component={QualityAssurance} />
        <Route path="/ReactJS" Component={ReactJS} />
        <Route path="/AngularJS" Component={AngularJS} />
        <Route path="/NodeJS" Component={NodeJS} />
        <Route path="/PHP" Component={PHP} />
        <Route path="/WordPress" Component={WordPress} />
        <Route path="/ReactNative" Component={ReactNative} />
        <Route path="/Flutter" Component={Flutter} />
        <Route path="/Android" Component={Android} />
        <Route path="/IOS" Component={IOS} />
        <Route path="/Java" Component={Java} />
        <Route path="/CrushApp" Component={CrushApp} />
        <Route path="/Easi" Component={Easi} />
        <Route path="/Enrollin" Component={Enrollin} />
        <Route path="/Nuntucket" Component={Nuntucket} />
        <Route path="/Sameep" Component={Sameep} />
        <Route path="/OpenAI" Component={OpenAI} />
        <Route path="/ChatGPT" Component={ChatGPT} />
        <Route path="/EnrollinApp" Component={EnrollinApp} />
        <Route path="/NantucketWeb" Component={NantucketWeb} />
        <Route path="/jPad" Component={jPad} />
        <Route path="/jPadAdminPanel" Component={jPadAdminPanel} />
        <Route path="/Brochure" Component={Brochure} />
        <Route path="/Epic" Component={Epic} />
        <Route path="/Crush" Component={Crush} />
        <Route path="/Inbines" Component={Inbines} />
        <Route path="/Acorn" Component={Acorn} />
        <Route path="/Sp" Component={Sp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

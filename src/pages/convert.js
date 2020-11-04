import React from "react";
import Form from "../components/form";
import Feedback from "../components/Feedback";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Layout from '../components/layout';


const form = () => ( <Layout>
    <Form />
    <Feedback />
    <Newsletter />
    <Contact />
</Layout>
)
export default form
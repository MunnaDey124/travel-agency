
import Sidebar from '../Sidebar/Sidebar';
import ServiceList from './ServiceList';

const AddService = () => {


return (
    <section className="container-fluid row ">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-5" >
            <ServiceList></ServiceList>
        </div>
    </section>
);
};

export default AddService;
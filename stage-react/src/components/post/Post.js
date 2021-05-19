import {Link} from "react-router-dom";

export default function Post(props) {

    let {item, url} = props;

    return (
        <div>
            {item.title}
            <Link to={url + '/' + item.id}>-> post details</Link>
        </div>
    );
};
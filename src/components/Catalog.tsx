import { useSelector } from 'react-redux';

export default function Catalog() {
    const catalog = useSelector((state => state));

    return (<div>Catalog</div>)
}

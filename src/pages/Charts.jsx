import { useEffect } from 'react';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import Center from '../components/Center';
import { ActiveLink } from '../components/Functions';


export default function Charts() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Charts"
            ActiveLink("charts");
        }
        UpdatePageTitle();
    }, [])
    return <>
        <BodyHidden>
            <MainDashboard>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi quasi cumque, dicta possimus magni, praesentium odit temporibus veritatis dolor labore? Illum inventore ipsam cumque non temporibus obcaecati iure quae?
            </MainDashboard>
        </BodyHidden>

    </>
}
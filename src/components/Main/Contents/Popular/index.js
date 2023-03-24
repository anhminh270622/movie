import ActionAreaCard from "../ActionAreaCard";
import "./Popular.scss"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

function Popular() {
    return (<>
        <div>
            <div className="Popular-top">
                <h1>What's Popular</h1>
            </div>
            <ScrollMenu>
                <div className="Popular-container">
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                    <ActionAreaCard />
                </div>
            </ScrollMenu>

        </div>
    </>);
}

export default Popular;
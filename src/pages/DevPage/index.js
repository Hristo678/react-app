import React, {useState} from "react";
import PageWrapper from "../../components/pageWrapper";
import Title from "../../components/title/title";

function DevPage(){

const [devState, setDevState] = useState('Dev')

    return <PageWrapper>
            <Title title={'Dev page'}>
               
            </Title>
            <h4>
                    This is a dev page!
                </h4>
        </PageWrapper>

}

export default DevPage;
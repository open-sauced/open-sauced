import Background from "../src/styles/Background";
import { ButtonBoard } from "../src/styles/Card";
import { Flex } from "../src/styles/Grid";
import { npm } from "../src/images";

export default {
    title: 'Miscellaneous'
}

export const Contributors = () => (
    <Background style={{height: 1024, padding: "10px"}}>
        <Flex>
            <ButtonBoard>
                <span>
                    <h3>Contributors</h3>
                    <div className="contributors">
                        <a rel="noreferrer" target="_blank">
                            <img
                                className="users"
                                style={{ height: "28px", borderRadius: "28px" }}
                                src={npm}
                            />
                        </a>
                        <a rel="noreferrer" target="_blank">
                            <img
                                className="users"
                                style={{ height: "28px", borderRadius: "28px" }}
                                src={npm}
                            />
                        </a>
                        <a rel="noreferrer" target="_blank">
                            <img
                                className="users"
                                style={{ height: "28px", borderRadius: "28px" }}
                                src={npm}
                            />
                        </a>
                        <a rel="noreferrer" target="_blank">
                            <img
                                className="users"
                                style={{ height: "28px", borderRadius: "28px" }}
                                src={npm}
                            />
                        </a>
                        <a rel="noreferrer" target="_blank">
                            <img
                                className="users"
                                style={{ height: "28px", borderRadius: "28px" }}
                                src={npm}
                            />
                        </a>
                        <a rel="noreferrer" target="_blank">
                            more...
                        </a>
                    </div>
                </span>
            </ButtonBoard>
        </Flex>
    </Background>
)
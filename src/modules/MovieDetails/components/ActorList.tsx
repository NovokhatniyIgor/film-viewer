import * as React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { getMovieCredits } from 'api/movies';
import { IMovieCast } from 'src/types';
import {checkImage} from "services/checkImage";

interface IActorList {
    id: string;
}

const ActorList: React.FC<IActorList> = ({ id }) => {
    const [actors, setActors] = React.useState<IMovieCast[]>([]);

    React.useEffect(() => {
        getMovieCredits(id).then((res) => {
            setActors(res.cast.slice(0, 20));
        });
    }, [id]);

    return (
        <>
            <h2>Casts</h2>
            <List
                grid={{ column: 2 }}
                itemLayout="vertical"
                dataSource={actors}
                renderItem={(item: IMovieCast) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<img alt="Actor" src={checkImage(45, 68, item.profile_path)} />}
                            title={<p>{item.name}</p>}
                            description={<Link to={`/actor/${item.id}`}>View More</Link>}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export { ActorList };

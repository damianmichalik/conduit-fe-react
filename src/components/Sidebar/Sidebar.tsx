import { useEffect, useState } from "react";

const Sidebar: React.FC = (): JSX.Element => {
    let [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/tags')
            .then((res) => res.json())
            .then((json) => {
                setTags(json.tags);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    return (
        <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list">
            {tags.map(tag => (<a key={tag} href="" className="tag-pill tag-default">{tag}</a>))}
            </div>
        </div>
    );
};

export default Sidebar;
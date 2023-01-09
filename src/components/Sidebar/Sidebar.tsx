import { useEffect, useState } from "react";
import TagsRepository from "../../repository/tags";

const Sidebar: React.FC = (): JSX.Element => {
    let [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const tagsRepository: TagsRepository = new TagsRepository();
        tagsRepository.findAll().then((tags) => setTags(tags));
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
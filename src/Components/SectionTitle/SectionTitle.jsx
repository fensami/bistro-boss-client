
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-8">
            <p className="mb-2 text-yellow-600 text-center">--- {subHeading} ---</p>
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;
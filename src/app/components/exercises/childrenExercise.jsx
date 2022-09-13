import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentsList = ({ children }) => {
   let order = 0;
   return React.Children.map(children, (child) => {
      order += 1;
      return React.cloneElement(child, {
         ...child.props,
         order
      });
   });

   /* ну или можно сделать проще
      return (
         <ol>
            {React.Children.map(children, (child) => {
               return <li>{child}</li>;
            })}
         </ol>
      );    */
};

ComponentsList.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
};

const ChildrenExercise = () => {
   return (
      <CollapseWrapper title="Упражнение">
         <p className="mt-3">
            У вас есть компоненты Списка. Вам необходимо к каждому из них
            добавить порядковый номер, относительно того, как они располагаются
            на странице. Вы можете использовать как{" "}
            <code>React.Children.map</code> так и{" "}
            <code>React.Children.toArray</code>
         </p>
         <ComponentsList>
            <Component />
            <Component />
            <Component />
         </ComponentsList>
      </CollapseWrapper>
   );
};

const Component = ({ order }) => {
   return <div>{`${order ? `${order}. ` : ""}Компонент списка`}</div>;
};

Component.propTypes = {
   order: PropTypes.number
};

export default ChildrenExercise;

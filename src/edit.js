import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useSelect, useDispatch } from '@wordpress/data';
import { CheckboxControl, TextControl, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
export default function Edit() {
  const data = useSelect((select) => {
    const store = select('block-course/todos');
    return {
      total: store?.getTodosNumber(),
      done: store?.getDoneTodos(),
      undone: store?.getUnDoneTodos(),
    };
  }, []);
  console.log(data);
  const actions = useDispatch('block-course/todos');
  const addTodo = actions && actions.addTodo;
  const toggleTodo = actions && actions.toggleTodo;

  return (
    <div {...useBlockProps()}>
      {!data && <p>Pleas make sure your plugin is activated</p>}

      {data && (
        <ul>
          <li>Done: {data.done}</li>
          <li>undone: {data.undone}</li>
          <li>total: {data.total}</li>
        </ul>
      )}
    </div>
  );
}

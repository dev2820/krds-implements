
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Button } from './Button';

describe('Button',()=>{
  it('버튼에 focus가 있는 상태에서 Enter, Space시 버튼이 실행되어야한다.',async () => {
    const fakeFn = vi.fn();
    render(<Button onClick={fakeFn}>btn</Button>);

    const button = screen.getByRole('button');

    button.focus();
    expect(button).toHaveFocus();

    await userEvent.click(button)
    expect(fakeFn).toHaveBeenCalledTimes(1);
    await userEvent.type(button, '{enter}', { skipClick:true})
    expect(fakeFn).toHaveBeenCalledTimes(2);
    await userEvent.type(button, '{space}')
    expect(fakeFn).toHaveBeenCalledTimes(3);
  });

  it('모든 버튼은 Tab, Shift + Tab 키를 눌렀을 때 접근할 수 있어야 한다.',async () => {
    render(<>
      <Button>btn1</Button>
      <Button>btn2</Button>
    </>);
    const [button1,button2] = screen.getAllByRole('button');

    button1.focus()
    expect(button1).toHaveFocus();

    await userEvent.tab(); 
    expect(button2).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(button1).toHaveFocus();
  });

  it('버튼의 기본 타입은 button이며, type을 지정할 수 있다.',() => {
    render(<>
    <Button>btn1</Button>
    <Button type="submit">btn2</Button>
    <Button type="reset">btn3</Button>
    </>);
    const button = screen.getByRole('button', { name: 'btn1' })
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveTextContent('btn1');
    
    const submit = screen.getByRole('button', { name: 'btn2'})
    expect(submit).toHaveAttribute('type', 'submit');
    expect(submit).toHaveTextContent('btn2');
    
    const reset = screen.getByRole('button', { name: 'btn3'})
    expect(reset).toHaveAttribute('type', 'reset');
    expect(reset).toHaveTextContent('btn3');  
  });
  
  it('disabled된 경우 클릭,Enter,Space시 클릭이벤트가 발생하지 않는다.',async () => {
    const fakeFn = vi.fn()
    render(
      <Button onClick={fakeFn} disabled>btn</Button>
    );
    
    const button = screen.getByRole('button')
    
    await userEvent.click(button)
    expect(fakeFn).toHaveBeenCalledTimes(0)
    
    button.focus()
    await userEvent.type(button, '{enter}', { skipClick:true})
    expect(fakeFn).toHaveBeenCalledTimes(0)

    await userEvent.type(button, '{space}')
    expect(fakeFn).toHaveBeenCalledTimes(0)
  })
})
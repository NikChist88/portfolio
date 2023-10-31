import { S } from "./MenuBtn_Styles"

type MenuBtnPropsType = {
  isOpen?: boolean
  onClick?: () => void
}

export const MenuBtn: React.FC<MenuBtnPropsType> = (
  props: MenuBtnPropsType
) => {

  return (
    <S.MenuBtn isOpen={props.isOpen} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </S.MenuBtn>
  )
}

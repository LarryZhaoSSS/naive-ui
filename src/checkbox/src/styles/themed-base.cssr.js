import { c, cTB, cB, cE, cM, insideModal, cNotM } from '../../../_utils/cssr'
import iconSwitchTransition from '../../../styles/_transitions/icon-switch'

export default c([
  ({ props }) => {
    const {
      easeInOutCubicBezier,
      transformDebounceScale
    } = props.$base
    const {
      borderRadius,
      color,
      colorDisabled,
      colorTableHeader,
      colorModalTableHeader,
      iconColor,
      iconColorDisabled,
      borderColor,
      borderColorDisabled,
      borderColorActive,
      boxShadowColorActive,
      labelTextColor,
      labelTextColorDisabled
    } = props.$local
    return [
      // checkbox
      cTB(
        'checkbox',
        {
          raw: `
            line-height: 1.25;
            outline: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
          `
        },
        [
          cB('checkbox-box', {
            raw: `
              display: inline-block;
              box-sizing: border-box;
              border-radius: ${borderRadius};
              position: relative;
              transition:
                box-shadow 0.3s ${easeInOutCubicBezier},
                background-color 0.3s ${easeInOutCubicBezier};
            `
          }, [
            cB('checkbox-icon', {
              raw: `
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                transform: ${transformDebounceScale};
              `
            }, [
              cE('line, check', {
                raw: `
                  width: calc(100% - 2px);
                  opacity: 0;
                  transform: scale(0.5);
                  transform-origin: center;
                  transition:
                    fill 0.3s ${easeInOutCubicBezier},
                    transform 0.3s ${easeInOutCubicBezier},
                    opacity 0.3s ${easeInOutCubicBezier},
                    border-color 0.3s ${easeInOutCubicBezier};
                `
              }),
              iconSwitchTransition()
            ])
          ]),
          cE('label', {
            raw: `
              transition: color .3s ${easeInOutCubicBezier};
              user-select: none;
              padding-left: 8px;
            `
          }),
          cM('checked', [
            cB('checkbox-box', [
              cB('checkbox-icon', [
                cE('check', {
                  raw: `
                    opacity: 1;
                    transform: scale(1);
                  `
                })
              ])
            ])
          ]),
          cM('indeterminate', [
            cB('checkbox-box', [
              cB('checkbox-icon', [
                cE('check', {
                  raw: `
                    opacity: 0;
                    transform: scale(.5);
                  `
                }),
                cE('line', {
                  raw: `
                    opacity: 1;
                    transform: scale(1);
                  `
                })
              ])
            ])
          ]),
          cM('disabled', {
            raw: `
              cursor: not-allowed;
            `
          })
        ]
      ),
      // checkbox-group
      cTB('checkbox-group', {
        raw: `
          font-size: 14px;
          line-height: 1.25;
        `
      }, [
        cB('checkbox', {
          raw: `
            margin-right: 18px;
          `
        })
      ]),
      // modal table header checkbox
      insideModal(
        cTB('checkbox', [
          cM('table-header', [
            cNotM('checked', [
              cNotM('indeterminate', [
                cNotM('disabled', [
                  cB('checkbox-box', {
                    raw: `
                      background-color: ${colorModalTableHeader}
                    `
                  })
                ])
              ])
            ])
          ])
        ])
      ),
      cTB('checkbox', [
        c('&:hover', [
          cB('checkbox-box', {
            raw: `
              box-shadow: inset 0 0 0 1px ${borderColorActive};
            `
          })
        ]),
        c('&:focus:not(:active)', [
          cB('checkbox-box', {
            raw: `
              box-shadow: 
                inset 0 0 0 1px ${borderColorActive}, 
                0 0 0 2px ${boxShadowColorActive};
            `
          })
        ]),
        cB('checkbox-box', {
          raw: `
            background-color: ${color};
            box-shadow: inset 0 0 0 1px ${borderColor};
          `
        }, [
          cB('checkbox-icon', [
            cE('check, line', {
              raw: `
                fill: ${iconColor};
              `
            })
          ])
        ]),
        cE('label', {
          raw: `
            color: ${labelTextColor};
          `
        }),
        cM('table-header', [
          cB('checkbox-box', {
            backgroundColor: colorTableHeader
          })
        ]),
        cM('checked, indeterminate', [
          c('&:focus:not(:active)', [
            cB('checkbox-box', {
              raw: `
                box-shadow:
                  inset 0 0 0 1px ${borderColorActive},
                  0 0 0 2px ${boxShadowColorActive};
              `
            })
          ]),
          cB('checkbox-box', {
            raw: `
              background-color: ${borderColorActive};
              box-shadow: inset 0 0 0 1px ${borderColorActive};
              border-left: 0;
              border-top: 0;
            `
          })
        ]),
        cM('disabled', [
          cB('checkbox-box', {
            raw: `
              background-color: ${colorDisabled};
              box-shadow: inset 0 0 0 1px ${borderColorDisabled};
            `
          }, [
            cB('checkbox-icon', [
              cE('check, line', {
                raw: `
                  fill: ${iconColorDisabled};
                `
              })
            ])
          ]),
          cE('label', {
            raw: `
              color: ${labelTextColorDisabled};
            `
          })
        ])
      ])
    ]
  }
])
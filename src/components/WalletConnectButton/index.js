import React from 'react'
import CustomButton from 'components/CustomButton'
import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from './style'

const requestMetamaskAccount = async () => {
  const ethereum = window.ethereum
  if (typeof ethereum === 'undefined') {
    alert(
      'MetaMask is not installed!. Please install Metamask web3 wallet first!'
    )
    return
  }

  const accounts = await getMMAccountList(ethereum)
  if (accounts.length) {
    console.log(accounts)
  }
}

const getMMAccountList = async ethereum => {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  return accounts
}

const WalletConnectButton = ({
  isLoading = false,
  type = 'Metamask',
  ...otherProps
}) => {
  const classes = useStyles()

  return (
    <CustomButton
      className={classes.walletButton}
      {...otherProps}
      onClick={requestMetamaskAccount}
    >
      {isLoading ? (
        <>
          connecting...
          <CircularProgress className={classes.walletProgress} />
        </>
      ) : (
        <>
          Metamask
          <svg
            width='32'
            height='30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.507 1L17.801 9.694l2.165-5.13L29.507 1z'
              fill='#E2761B'
              stroke='#E2761B'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M2.483 1l11.612 8.777-2.059-5.212L2.483 1zM25.294 21.153l-3.117 4.776 6.67 1.836 1.918-6.506-5.47-.106zM1.247 21.259l1.906 6.506 6.67-1.836-3.117-4.776-5.459.106z'
              fill='#E4761B'
              stroke='#E4761B'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M9.448 13.082L7.59 15.893l6.624.295-.235-7.118-4.53 4.012zM22.543 13.083l-4.588-4.094-.153 7.2 6.611-.294-1.87-2.812zM9.823 25.93l3.977-1.942-3.436-2.682-.54 4.623zM18.189 23.988l3.988 1.941-.553-4.623-3.435 2.682z'
              fill='#E4761B'
              stroke='#E4761B'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M22.175 25.928l-3.989-1.94.318 2.6-.035 1.093 3.706-1.753zM9.821 25.928l3.706 1.753-.023-1.094.294-2.6L9.82 25.93z'
              fill='#D7C1B3'
              stroke='#D7C1B3'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M13.588 19.59l-3.317-.977 2.341-1.071.976 2.047zM18.4 19.59l.977-2.048 2.353 1.07-3.33.977z'
              fill='#233447'
              stroke='#233447'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M9.823 25.929l.564-4.777-3.682.106 3.118 4.67zM21.611 21.152l.565 4.777 3.118-4.67-3.683-.107zM24.412 15.894l-6.612.294.612 3.4.976-2.047 2.353 1.07 2.67-2.717zM10.27 18.611l2.353-1.07.965 2.047.623-3.4-6.623-.294 2.682 2.717z'
              fill='#CD6116'
              stroke='#CD6116'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M7.587 15.894l2.777 5.411-.094-2.694-2.683-2.717zM21.74 18.611l-.117 2.694 2.788-5.411-2.67 2.717zM14.211 16.188l-.623 3.4.776 4.012.177-5.283-.33-2.129zM17.798 16.188l-.317 2.118.14 5.294.789-4.012-.612-3.4z'
              fill='#E4751F'
              stroke='#E4751F'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M18.413 19.589l-.788 4.012.564.388 3.436-2.683.117-2.694-3.33.977zM10.27 18.612l.095 2.695 3.435 2.682.565-.388-.777-4.012-3.317-.977z'
              fill='#F6851B'
              stroke='#F6851B'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M18.47 27.683l.035-1.095-.294-.258h-4.435l-.271.259.023 1.094-3.705-1.753 1.294 1.058 2.623 1.824h4.506l2.636-1.824 1.294-1.058-3.706 1.753z'
              fill='#C0AD9E'
              stroke='#C0AD9E'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M18.19 23.989l-.565-.388h-3.259l-.565.388-.294 2.6.27-.259h4.436l.294.259-.317-2.6z'
              fill='#161616'
              stroke='#161616'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M30 10.259l1-4.8L29.506 1 18.188 9.4l4.353 3.682 6.153 1.8 1.365-1.588-.588-.423.94-.86-.729-.564.942-.717-.624-.471zM1 5.459l1 4.8-.635.47.94.718-.717.565.941.859-.588.423 1.353 1.589 6.153-1.8L13.8 9.4 2.482 1 1 5.459z'
              fill='#763D16'
              stroke='#763D16'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M28.695 14.883l-6.154-1.8 1.871 2.812-2.788 5.412 3.67-.047h5.471l-2.07-6.377zM9.447 13.083l-6.153 1.8-2.047 6.377h5.459l3.659.047-2.777-5.412 1.859-2.812zM17.8 16.189l.39-6.789 1.787-4.835h-7.94L13.8 9.4l.412 6.789.14 2.14.013 5.271h3.259l.023-5.27.153-2.141z'
              fill='#F6851B'
              stroke='#F6851B'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </>
      )}
    </CustomButton>
  )
}

export default WalletConnectButton

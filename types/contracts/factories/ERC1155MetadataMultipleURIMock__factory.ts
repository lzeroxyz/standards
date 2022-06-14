/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  ERC1155MetadataMultipleURIMock,
  ERC1155MetadataMultipleURIMockInterface,
} from '../ERC1155MetadataMultipleURIMock';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: '_value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_approvals',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: '_balances',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'owners',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'balances',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: 'tokenUri',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611244806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d35760003560e01c806344df8e7011610081578063a22cb4651161005b578063a22cb465146101de578063e985e9c5146101f1578063f242432a1461022d57600080fd5b806344df8e70146101535780634e1273f4146101965780636be8d6b5146101b657600080fd5b80631b2ef1ca116100b25780631b2ef1ca146101415780632eb2c2d614610155578063319d53e71461016857600080fd5b8062fdd58e146100d857806301ffc9a7146100fe5780630e89341c14610121575b600080fd5b6100eb6100e6366004610e8a565b610240565b6040519081526020015b60405180910390f35b61011161010c366004610f1c565b6102c3565b60405190151581526020016100f5565b61013461012f366004610f54565b610360565b6040516100f59190611122565b61015361014f366004610f6c565b5050565b005b610153610163366004610d23565b610453565b610111610176366004610cf1565b600160209081526000928352604080842090915290825290205460ff1681565b6101a96101a4366004610eb3565b6107b7565b6040516100f591906110de565b6100eb6101c4366004610e8a565b600060208181529281526040808220909352908152205481565b6101536101ec366004610e50565b610958565b6101116101ff366004610cf1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61015361023b366004610dda565b6109c4565b60006001600160a01b03831661029d5760405162461bcd60e51b815260206004820152601860248201527f455243313135353a20496e76616c69642061646472657373000000000000000060448201526064015b60405180910390fd5b506001600160a01b03909116600090815260208181526040808320938352929052205490565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316148061032657507fd9b67a26000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b8061035a57507f0e89341c000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b600081815260026020526040902080546060919061037d906111a4565b80601f01602080910402602001604051908101604052809291908181526020018280546103a9906111a4565b80156103f65780601f106103cb576101008083540402835291602001916103f6565b820191906000526020600020905b8154815290600101906020018083116103d957829003601f168201915b50505050509050600081511161044e5760405162461bcd60e51b815260206004820152601660248201527f455243313135353a20557269206e6f7420666f756e64000000000000000000006044820152606401610294565b919050565b8483146104c85760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2049647320616e6420616d6f756e7473206c656e6774682060448201527f6d6973746d6174636800000000000000000000000000000000000000000000006064820152608401610294565b6001600160a01b03881633148061050257506001600160a01b038816600090815260016020908152604080832033845290915290205460ff165b6105585760405162461bcd60e51b815260206004820152602160248201527f455243313135353a2043616c6c6572206973206e6f7420617574686f72697a656044820152601960fa1b6064820152608401610294565b60008060005b8781101561062f5788888281811061058657634e487b7160e01b600052603260045260246000fd5b9050602002013592508686828181106105af57634e487b7160e01b600052603260045260246000fd5b6001600160a01b038e16600090815260208181526040808320898452825282208054939091029490940135955085939250906105ec90849061118d565b90915550506001600160a01b038a1660009081526020818152604080832086845290915281208054849290610622908490611175565b909155505060010161055e565b50886001600160a01b03168a6001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8b8b8b8b60405161068394939291906110ac565b60405180910390a46001600160a01b0389163b15610752576040517fbc197c8100000000000000000000000000000000000000000000000000000000808252906001600160a01b038b169063bc197c81906106f09033908f908e908e908e908e908e908e90600401611003565b602060405180830381600087803b15801561070a57600080fd5b505af115801561071e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107429190610f38565b6001600160e01b0319161461075f565b6001600160a01b03891615155b6107ab5760405162461bcd60e51b815260206004820152601960248201527f455243313135353a20556e7361666520726563697069656e74000000000000006044820152606401610294565b50505050505050505050565b606083821461082e5760405162461bcd60e51b815260206004820152602c60248201527f455243313135353a204f776e65727320616e6420616d6f756e7473206c656e6760448201527f7468206d6973746d6174636800000000000000000000000000000000000000006064820152608401610294565b8367ffffffffffffffff81111561085557634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561087e578160200160208202803683370190505b50905060005b8481101561094f576000808787848181106108af57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906108c49190610cd0565b6001600160a01b03166001600160a01b03168152602001908152602001600020600085858481811061090657634e487b7160e01b600052603260045260246000fd5b9050602002013581526020019081526020016000205482828151811061093c57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152600101610884565b50949350505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0386163314806109fe57506001600160a01b038616600090815260016020908152604080832033845290915290205460ff165b610a545760405162461bcd60e51b815260206004820152602160248201527f455243313135353a2043616c6c6572206973206e6f7420617574686f72697a656044820152601960fa1b6064820152608401610294565b6001600160a01b03861660009081526020818152604080832087845290915281208054859290610a8590849061118d565b90915550506001600160a01b03851660009081526020818152604080832087845290915281208054859290610abb908490611175565b909155505060408051858152602081018590526001600160a01b03808816929089169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46001600160a01b0385163b15610bce576040517ff23a6e6100000000000000000000000000000000000000000000000000000000808252906001600160a01b0387169063f23a6e6190610b6c9033908b908a908a908a908a90600401611067565b602060405180830381600087803b158015610b8657600080fd5b505af1158015610b9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbe9190610f38565b6001600160e01b03191614610bdb565b6001600160a01b03851615155b610c275760405162461bcd60e51b815260206004820152601960248201527f455243313135353a20556e7361666520726563697069656e74000000000000006044820152606401610294565b505050505050565b80356001600160a01b038116811461044e57600080fd5b60008083601f840112610c57578182fd5b50813567ffffffffffffffff811115610c6e578182fd5b6020830191508360208260051b8501011115610c8957600080fd5b9250929050565b60008083601f840112610ca1578182fd5b50813567ffffffffffffffff811115610cb8578182fd5b602083019150836020828501011115610c8957600080fd5b600060208284031215610ce1578081fd5b610cea82610c2f565b9392505050565b60008060408385031215610d03578081fd5b610d0c83610c2f565b9150610d1a60208401610c2f565b90509250929050565b60008060008060008060008060a0898b031215610d3e578384fd5b610d4789610c2f565b9750610d5560208a01610c2f565b9650604089013567ffffffffffffffff80821115610d71578586fd5b610d7d8c838d01610c46565b909850965060608b0135915080821115610d95578586fd5b610da18c838d01610c46565b909650945060808b0135915080821115610db9578384fd5b50610dc68b828c01610c90565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215610df2578182fd5b610dfb87610c2f565b9550610e0960208801610c2f565b94506040870135935060608701359250608087013567ffffffffffffffff811115610e32578283fd5b610e3e89828a01610c90565b979a9699509497509295939492505050565b60008060408385031215610e62578182fd5b610e6b83610c2f565b915060208301358015158114610e7f578182fd5b809150509250929050565b60008060408385031215610e9c578182fd5b610ea583610c2f565b946020939093013593505050565b60008060008060408587031215610ec8578384fd5b843567ffffffffffffffff80821115610edf578586fd5b610eeb88838901610c46565b90965094506020870135915080821115610f03578384fd5b50610f1087828801610c46565b95989497509550505050565b600060208284031215610f2d578081fd5b8135610cea816111f5565b600060208284031215610f49578081fd5b8151610cea816111f5565b600060208284031215610f65578081fd5b5035919050565b60008060408385031215610f7e578182fd5b50508035926020909101359150565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610fbe578081fd5b8260051b80836020870137939093016020019283525090919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60006001600160a01b03808b168352808a1660208401525060a0604083015261103060a08301888a610f8d565b8281036060840152611043818789610f8d565b90508281036080840152611058818587610fda565b9b9a5050505050505050505050565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301526110a060a083018486610fda565b98975050505050505050565b6040815260006110c0604083018688610f8d565b82810360208401526110d3818587610f8d565b979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611116578351835292840192918401916001016110fa565b50909695505050505050565b6000602080835283518082850152825b8181101561114e57858101830151858201604001528201611132565b8181111561115f5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115611188576111886111df565b500190565b60008282101561119f5761119f6111df565b500390565b600181811c908216806111b857607f821691505b602082108114156111d957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160e01b03198116811461120b57600080fd5b5056fea26469706673582212207796dec3c44adc6b6d5c5b800af8f75fd4bee8fcd073e96b4a07d54d1df1997564736f6c63430008040033';

type ERC1155MetadataMultipleURIMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155MetadataMultipleURIMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155MetadataMultipleURIMock__factory extends ContractFactory {
  constructor(...args: ERC1155MetadataMultipleURIMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'ERC1155MetadataMultipleURIMock';
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155MetadataMultipleURIMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC1155MetadataMultipleURIMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155MetadataMultipleURIMock {
    return super.attach(address) as ERC1155MetadataMultipleURIMock;
  }
  connect(signer: Signer): ERC1155MetadataMultipleURIMock__factory {
    return super.connect(signer) as ERC1155MetadataMultipleURIMock__factory;
  }
  static readonly contractName: 'ERC1155MetadataMultipleURIMock';
  public readonly contractName: 'ERC1155MetadataMultipleURIMock';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MetadataMultipleURIMockInterface {
    return new utils.Interface(_abi) as ERC1155MetadataMultipleURIMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MetadataMultipleURIMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MetadataMultipleURIMock;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IArbitratorInterface extends utils.Interface {
  contractName: "IArbitrator";
  functions: {
    "appeal(uint256,bytes)": FunctionFragment;
    "appealCost(uint256,bytes)": FunctionFragment;
    "appealPeriod(uint256)": FunctionFragment;
    "arbitrationCost(bytes)": FunctionFragment;
    "createDispute(uint256,bytes)": FunctionFragment;
    "currentRuling(uint256)": FunctionFragment;
    "disputeStatus(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "appeal",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "appealCost",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "appealPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "arbitrationCost",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createDispute",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRuling",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disputeStatus",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "appealCost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "appealPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arbitrationCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRuling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeStatus",
    data: BytesLike
  ): Result;

  events: {
    "AppealDecision(uint256,address)": EventFragment;
    "AppealPossible(uint256,address)": EventFragment;
    "DisputeCreation(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AppealDecision"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AppealPossible"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisputeCreation"): EventFragment;
}

export type AppealDecisionEvent = TypedEvent<
  [BigNumber, string],
  { _disputeID: BigNumber; _arbitrable: string }
>;

export type AppealDecisionEventFilter = TypedEventFilter<AppealDecisionEvent>;

export type AppealPossibleEvent = TypedEvent<
  [BigNumber, string],
  { _disputeID: BigNumber; _arbitrable: string }
>;

export type AppealPossibleEventFilter = TypedEventFilter<AppealPossibleEvent>;

export type DisputeCreationEvent = TypedEvent<
  [BigNumber, string],
  { _disputeID: BigNumber; _arbitrable: string }
>;

export type DisputeCreationEventFilter = TypedEventFilter<DisputeCreationEvent>;

export interface IArbitrator extends BaseContract {
  contractName: "IArbitrator";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IArbitratorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    appeal(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    appealCost(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    appealPeriod(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { start: BigNumber; end: BigNumber }>;

    arbitrationCost(
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    createDispute(
      _choices: BigNumberish,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentRuling(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { ruling: BigNumber }>;

    disputeStatus(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { status: number }>;
  };

  appeal(
    _disputeID: BigNumberish,
    _extraData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  appealCost(
    _disputeID: BigNumberish,
    _extraData: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  appealPeriod(
    _disputeID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { start: BigNumber; end: BigNumber }>;

  arbitrationCost(
    _extraData: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createDispute(
    _choices: BigNumberish,
    _extraData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentRuling(
    _disputeID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  disputeStatus(
    _disputeID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    appeal(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    appealCost(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    appealPeriod(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { start: BigNumber; end: BigNumber }>;

    arbitrationCost(
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createDispute(
      _choices: BigNumberish,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRuling(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disputeStatus(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    "AppealDecision(uint256,address)"(
      _disputeID?: BigNumberish | null,
      _arbitrable?: string | null
    ): AppealDecisionEventFilter;
    AppealDecision(
      _disputeID?: BigNumberish | null,
      _arbitrable?: string | null
    ): AppealDecisionEventFilter;

    "AppealPossible(uint256,address)"(
      _disputeID?: BigNumberish | null,
      _arbitrable?: string | null
    ): AppealPossibleEventFilter;
    AppealPossible(
      _disputeID?: BigNumberish | null,
      _arbitrable?: string | null
    ): AppealPossibleEventFilter;

    "DisputeCreation(uint256,address)"(
      _disputeID?: BigNumberish | null,
      _arbitrable?: string | null
    ): DisputeCreationEventFilter;
    DisputeCreation(
      _disputeID?: BigNumberish | null,
      _arbitrable?: string | null
    ): DisputeCreationEventFilter;
  };

  estimateGas: {
    appeal(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    appealCost(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    appealPeriod(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    arbitrationCost(
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createDispute(
      _choices: BigNumberish,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentRuling(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disputeStatus(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appeal(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    appealCost(
      _disputeID: BigNumberish,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    appealPeriod(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arbitrationCost(
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createDispute(
      _choices: BigNumberish,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentRuling(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disputeStatus(
      _disputeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

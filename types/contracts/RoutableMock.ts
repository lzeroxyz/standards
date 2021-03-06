/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface RoutableMockInterface extends utils.Interface {
  contractName: 'RoutableMock';
  functions: {
    'openFunction()': FunctionFragment;
    'routedFunction()': FunctionFragment;
    'router()': FunctionFragment;
    'transferRouter(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'openFunction',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'routedFunction',
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: 'router', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transferRouter',
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: 'openFunction',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'routedFunction',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferRouter',
    data: BytesLike
  ): Result;

  events: {
    'RouterTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RouterTransferred'): EventFragment;
}

export type RouterTransferredEvent = TypedEvent<
  [string, string],
  { previousRouter: string; newRouter: string }
>;

export type RouterTransferredEventFilter =
  TypedEventFilter<RouterTransferredEvent>;

export interface RoutableMock extends BaseContract {
  contractName: 'RoutableMock';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoutableMockInterface;

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
    openFunction(overrides?: CallOverrides): Promise<[boolean]>;

    'openFunction()'(overrides?: CallOverrides): Promise<[boolean]>;

    routedFunction(overrides?: CallOverrides): Promise<[boolean]>;

    'routedFunction()'(overrides?: CallOverrides): Promise<[boolean]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    'router()'(overrides?: CallOverrides): Promise<[string]>;

    transferRouter(
      newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'transferRouter(address)'(
      newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  openFunction(overrides?: CallOverrides): Promise<boolean>;

  'openFunction()'(overrides?: CallOverrides): Promise<boolean>;

  routedFunction(overrides?: CallOverrides): Promise<boolean>;

  'routedFunction()'(overrides?: CallOverrides): Promise<boolean>;

  router(overrides?: CallOverrides): Promise<string>;

  'router()'(overrides?: CallOverrides): Promise<string>;

  transferRouter(
    newRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'transferRouter(address)'(
    newRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    openFunction(overrides?: CallOverrides): Promise<boolean>;

    'openFunction()'(overrides?: CallOverrides): Promise<boolean>;

    routedFunction(overrides?: CallOverrides): Promise<boolean>;

    'routedFunction()'(overrides?: CallOverrides): Promise<boolean>;

    router(overrides?: CallOverrides): Promise<string>;

    'router()'(overrides?: CallOverrides): Promise<string>;

    transferRouter(newRouter: string, overrides?: CallOverrides): Promise<void>;

    'transferRouter(address)'(
      newRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'RouterTransferred(address,address)'(
      previousRouter?: string | null,
      newRouter?: string | null
    ): RouterTransferredEventFilter;
    RouterTransferred(
      previousRouter?: string | null,
      newRouter?: string | null
    ): RouterTransferredEventFilter;
  };

  estimateGas: {
    openFunction(overrides?: CallOverrides): Promise<BigNumber>;

    'openFunction()'(overrides?: CallOverrides): Promise<BigNumber>;

    routedFunction(overrides?: CallOverrides): Promise<BigNumber>;

    'routedFunction()'(overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    'router()'(overrides?: CallOverrides): Promise<BigNumber>;

    transferRouter(
      newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'transferRouter(address)'(
      newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    openFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'openFunction()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routedFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'routedFunction()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'router()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferRouter(
      newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'transferRouter(address)'(
      newRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AddLoanDetailsProps {
    loanProvider: string;
    amount: string;
    year: string;
    month: string;
    startDate: string;
    errors: {
      loanProvider: string;
      amount: string;
      year: string;
      month: string;
      startDate: string;
    },
    validate: (key: string, data: string | Date) => void;
    numberOfMonths: number;
    dateHandler: (y: number, m: any) => void;
  }
  
  export interface TargetValue {
    target: { value: string }
  }
  
  export interface LoanTypeProps {
    onClick: (loanType: string) => void
  }
  
  export interface AddInterestEmiDetailsProps {
    emi: string;
    interest: string;
    onChange: (key: string, data: string) => void;
    toggleModal: (show: boolean) => void;
    errors: {
      emi: string
    };
  }
  
  export interface AddLiabilitiesSuccessProps {
    liabilitiesData: {
      customer_id: string;
      emi: number;
      interest_rate: number;
      end_date: string | Date;
      start_date: string | Date;
      investor_id: string;
      liability_type: string;
      id: string;
      remaining_amount: number;
      total_amount: number;
      name: string;
      principal: number;
    }
  }
  
  export interface LoanTypes {
    title: string;
    icon: string;
  }
  
  export interface EmiModalProps {
    showModal: boolean;
    toggleModal: (show: boolean) => void;
  }
  
  export interface EmiModalContent {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface LiabilitiesDashboardProps {
    match: {
      params: {
        liabilityType: string;
      }
    }
  }
  
  export interface LiabilityCardProps {
    liabilityType: string;
    providerName: string;
    remaningAmount: number;
    totalAmount: number;
    startDate: string;
    endDate: string;
    interestRate: number;
    emi: number;
    onUpdateClick: (id: string) => void;
    id: string;
    onDeleteClick: (id: string) => void;
    isLoanCompleted: boolean
  }
  
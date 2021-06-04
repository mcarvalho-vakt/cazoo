import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { PushSpinner } from 'react-spinners-kit';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Car } from '../../model/Car';
import {useApi} from '../../services/use-api';
import { MdChevronLeft, MdChevronRight, MdAddCircle } from 'react-icons/md';
import {
    Container, 
    Content, 
    Actions, 
    PreviousButton, 
    NextButton, 
    Filters, 
    ButtonNew,
    FilterAction,
    FilterOptions,
    SelectOptions
} from './styles';
import {Modal, Select} from '../../components';

interface RequestParams {
    page: number;
    color: string;
    maker: string;
    sort: string;
}

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const { get } = useApi();
    const [showModal, setShowModal] = useState(false);
    const [color, setColor] = useState<string>('');
    const [maker, setMaker] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    
    const fetchProjects = async ({page = 0, color, maker, sort}: RequestParams) => {
        let url: string = `cars?limit=10&page=${page}`;
        if(color) url = `${url}&color=${color}`;
        if(maker) url = `${url}&maker=${maker}`;
        if(sort) url = `${url}&sort=${sort}`;
        
        const {data} = await get<Car[]>(url);
      return data;
    }
    const { isLoading, isError, error, data: cars, isPreviousData } = useQuery<Car[], Error>(['cars', {page, color, maker, sort}], () => fetchProjects({page, color, maker, sort}), { keepPreviousData : true })
    
    const handlePreviousPage = () => {
        setPage(old => Math.max(old - 1, 0));
    }

    const handleNextPage = () => {
        if (!isPreviousData) {
            setPage(old => old + 1)
        }
    }

    const handleColor = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        setColor(event.target.value);
    },[])

    const handleMaker = (event: ChangeEvent<HTMLSelectElement>) => {
        setMaker(event.target.value);
    }

    const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    }

    const handleAdd = () => {
        setShowModal(true);
    }

    const isDisabled = useMemo(() => {
        return !isPreviousData && (cars && cars.length <= 0)
    },[cars, isPreviousData]);

    if(isLoading) return <PushSpinner size={30} color="#686769" loading={isLoading} />;
    
    if(isError) return (<div>{error?.message}</div>);
    
    return (
        <Container>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Header />
            <Filters>
                <FilterAction>
                    <ButtonNew onClick={handleAdd}>
                        Add New
                        <MdAddCircle />
                    </ButtonNew>
                </FilterAction>
                <FilterOptions>
                    <Select 
                        label='Color:'
                        onChange={handleColor} 
                        option={optionColor}
                    />
                    <Select 
                        label='Maker:'
                        onChange={handleMaker} 
                        option={optionMaker}
                    />
                    <Select 
                        label='Sort:' 
                        onChange={handleSort} 
                        option={optionSort} 
                        optionGroup={optionGroupSort} 
                    />
                </FilterOptions>
            </Filters>
            <Actions>
                <PreviousButton 
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                >
                    <MdChevronLeft />
                </PreviousButton>
                page: {page}
                <NextButton 
                    onClick={handleNextPage}
                    disabled={isDisabled}
                >
                    <MdChevronRight />
                </NextButton>
            </Actions>
            <Content>
                {cars?.map(car => (
                    <Card key={car._id} car={car} />
                ))}
            </Content>
            <Actions>
                <PreviousButton 
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                >
                    <MdChevronLeft />
                </PreviousButton>
                page: {page}
                <NextButton 
                    onClick={handleNextPage}
                    disabled={isDisabled}
                >
                    <MdChevronRight />
                </NextButton>
            </Actions>
        </Container>
    )
};

const optionColor = [
    {value: '', text: 'Choose color'},
    {value: 'Black', text: 'Black'},
    {value: 'White', text: 'White'},
    {value: 'Red', text: 'Red'},
    {value: 'Blue', text: 'Blue'},
    {value: 'Grey', text: 'Grey'},
    {value: 'Yellow', text: 'Yellow'},
    {value: 'Green', text: 'Green'}
];

const optionMaker = [
    {value: '', text: 'Choose maker'},
    {value: 'BMW', text: 'BMW'},
    {value: 'Toyota', text: 'Toyota'},
    {value: 'Renault', text: 'Renault'}
];

const optionSort = [{value: '', text: 'Choose sort'}];
const optionGroupSort = [{
    label:'Price', 
    option: [{
        value: 'monthly,desc', 
        text: 'Highest price'
    },{
        value: 'monthly,asc',
        text: 'Lowest price'
    }]
},{
    label: 'Year',
    option: [{
        value: 'year,desc',
        text: 'Descending/Year'
    },{
        value: 'year,asc',
        text: 'Ascending/Year'
    }]
},{
    label: 'Maker',
    option: [{
        value: 'maker,desc',
        text: 'Descending/Maker'
    },{
        value: 'maker,asc',
        text: 'Ascending/Maker'
    }]
},{
    label: 'Availability',
    option: [{
        value: 'availability,desc',
        text: 'Descending/Availability'
    },{
        value: 'availability,asc',
        text: 'Ascending/Availability'
    }]
}]

export default Dashboard;

import { Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import moment from 'moment'
import { useState } from 'react'
const OPTION_CATEGORY =[    
    {
        name : "điện máy",
        value : "1",
    },
    {
        name : "thời trang",
        value : "2",
    },
    {
        name : "mỹ phẩm",
        value : "3",
    }
]

const OPTION_STATUS =[    
    {
        name : "hiện",
        value : "1",
    },
    {
        name : "ẩn",
        value : "2",
    },
]

const Search = () => {
  const [searchByName, setSearchByName] = useState('')
  const [searchByCategory, setSearchByCategory] = useState('0')
  const [searchByCreatedDate, setSearchByCreatedDate] = useState<Date | null | string>(null)
  const [searchByStatus, setSearchByStatus] = useState('')
  const handleSelectSearchByCategory = (e: SelectChangeEvent) => {
    setSearchByCategory(e.target.value)
  }

  const handelSearchByDate = (e : Date | null) =>{
    const searchByCreatedDateFormat = moment(e).format();
    setSearchByCreatedDate(searchByCreatedDateFormat);
  } 
  const handelSearch =() =>{
    const searchByCreatedDateFormat = moment(searchByCreatedDate).format();
    console.log({searchByName,searchByCategory,searchByCreatedDateFormat,searchByStatus})
  }

  return (
    <div className='search-product flex'>
      <div className='mr-3'>
        <label className='block'>Search for Product</label>
        <TextField
          sx={{ width: '500px' }}
          className='w-100'
          value={searchByName}
          placeholder='Search for product Id'
          onChange={(e) => setSearchByName(e.target.value)}
        />
      </div>
      <div>
        <label className='block'>Search by Category</label>
        <Select
          className='w-2/3'
          sx={{ width: '200px' }}
          value={searchByCategory}
          onChange={handleSelectSearchByCategory}
          labelId='demo-simple-select-label'
        >
          <MenuItem value={'0'} disabled>
            Category
          </MenuItem>
         { OPTION_CATEGORY.map((option) =>{
            return  <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
          })}
        </Select>
      </div>
      <div className='ml-2'>
        <label className='block'>Created date</label>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DemoContainer sx={{ width: '300px', padding: '0px' }} components={['DateTimePicker']}>
            <DatePicker format='DD-MM-YYYY' onChange={(e : Date | null) => handelSearchByDate(e)}/>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='mx-3'>
        <label className='block'>Status</label>
        <Select placeholder='Status' value={searchByStatus} onChange={(e) => setSearchByStatus(e.target.value)} sx={{ width: '200px' }}>
            {
                OPTION_STATUS.map((option) =>{
                    return <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
                })
            }
        </Select>
      </div>
      <div className='flex content-center items-center mt-5'>
        <Button
        onClick={handelSearch}
          color='primary'
          sx={{
            border: '1px solid #000000',
            borderRadius: '10px',
            backgroundColor: '#',
            height: '50px',
            minWidth: '100px'
          }}
        >
          Search
        </Button>
      </div>
    </div>
  )
}

export default Search

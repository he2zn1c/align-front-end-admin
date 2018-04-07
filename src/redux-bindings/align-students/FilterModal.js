import FilterModal from '../../components/align-student/filter-modal/RootComponent';
import {connect} from 'react-redux';
import {closeEditStudentFilterModal,applyStudentFilters} from '../../actions/align-students-actions';

function mapStateToProps(state){
    return {
        studentFilters: state.alignStudent.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {
        applyFilters: studentFilters => {
            dispatch(applyStudentFilters(studentFilters));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterModal);